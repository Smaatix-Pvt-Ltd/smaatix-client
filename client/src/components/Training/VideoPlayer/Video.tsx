import React, { useState, useRef, useEffect } from 'react';
import Hls from 'hls.js';
import VideoControls from './VideoControls';
import SettingsMenu from './SettingsMenu';
import BufferingIndicator from './BufferingIndicator';

interface VideoProps {
  src: string | { [quality: string]: string }; // Allow single URL or map of quality -> URL
  title?: string;
  width?: string;
  height?: string;
  autoPlay?: boolean;
  defaultQuality?: string;
}

const Video: React.FC<VideoProps> = ({
  src,
  title = 'Video Player',
  width = '100%',
  height = 'auto',
  autoPlay = false,
  defaultQuality = '720p',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState(defaultQuality);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hls, setHls] = useState<Hls | null>(null);
  const [availableQualities, setAvailableQualities] = useState<{ label: string; value: string }[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [bufferedProgress, setBufferedProgress] = useState(0); // State for buffered progress


  // Determine if we're dealing with HLS or multiple MP4 sources
  const isHLSSource = typeof src === 'string' && src.includes('.m3u8');
  const isMultipleMP4Sources = typeof src !== 'string';

  // Get the effective source URL based on the current state
  useEffect(() => {
    if (typeof src === 'string') {
      setCurrentSrc(src);
    } else if (isMultipleMP4Sources && selectedQuality in src) {
      setCurrentSrc(src[selectedQuality]);
    } else if (isMultipleMP4Sources && Object.keys(src).length > 0) {
      // If selected quality not available, use the first one
      setCurrentSrc(src[Object.keys(src)[0]]);
    }
  }, [src, selectedQuality]);

  // Set up available qualities based on source type
  useEffect(() => {
    if (isMultipleMP4Sources && typeof src !== 'string') {
      // For MP4 sources, qualities come from the keys of the src object
      const qualities = Object.keys(src).map(quality => ({
        label: quality,
        value: quality
      }));
      setAvailableQualities(qualities);
      
      // Set initial quality if available, otherwise use the first one
      if (qualities.some(q => q.value === defaultQuality)) {
        setSelectedQuality(defaultQuality);
      } else if (qualities.length > 0) {
        setSelectedQuality(qualities[0].value);
      }
    }
  }, [src, defaultQuality]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentSrc) return;

    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const bufferedPercent = (bufferedEnd / video.duration) * 100;
        setBufferedProgress(bufferedPercent);
      }
    };

    // Reset error state when source changes
    setErrorMessage(null);
    setRetryCount(0);

    // Save current playback position and playing state for quality switching
    const wasPlaying = isPlaying;
    const currentPosition = video.currentTime;

    if (isHLSSource && Hls.isSupported()) {
      // Handle HLS streams
      if (hls) {
        hls.destroy();
      }
      
      const hlsInstance = new Hls({
        maxBufferLength: 30,
        maxMaxBufferLength: 600,
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 60,
        startLevel: -1, // Auto select initial quality
      });
      
      hlsInstance.loadSource(currentSrc);
      hlsInstance.attachMedia(video);
      setHls(hlsInstance);

      hlsInstance.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        // Get available qualities from HLS manifest
        const levels = hlsInstance.levels;
        if (levels && levels.length > 0) {
          const qualities = levels.map((level, index) => ({
            label: `${level.height}p`,
            value: index.toString(),
          }));
          setAvailableQualities(qualities);
          // Set initial quality to the highest by default
          setSelectedQuality(qualities[qualities.length - 1].value);
        }

        if (autoPlay || wasPlaying) {
          video.play().catch((error) => {
            console.error('Playback failed:', error);
            setIsPlaying(false);
          });
        }
      });

      hlsInstance.on(Hls.Events.ERROR, (event, data) => {
        console.warn(`HLS Error: Type: ${data.type}, Details: ${data.details}`);
        
        if (data.fatal) {
          const errorTypes = {
            [Hls.ErrorTypes.NETWORK_ERROR]: 'Network Error',
            [Hls.ErrorTypes.MEDIA_ERROR]: 'Media Error',
            [Hls.ErrorTypes.KEY_SYSTEM_ERROR]: 'DRM Error',
            [Hls.ErrorTypes.MUX_ERROR]: 'Mux Error',
            [Hls.ErrorTypes.OTHER_ERROR]: 'Unknown Error',
          };
          
          const errorType = errorTypes[data.type] || 'Unknown Error';
          setErrorMessage(`${errorType}: ${data.details}`);
          
          if (retryCount < maxRetries) {
            const newRetryCount = retryCount + 1;
            setRetryCount(newRetryCount);
            
            console.log(`Attempting recovery (${newRetryCount}/${maxRetries})...`);
            
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                setTimeout(() => {
                  setErrorMessage(`Network error, retrying (${newRetryCount}/${maxRetries})...`);
                  hlsInstance.startLoad();
                }, 2000);
                break;
                
              case Hls.ErrorTypes.MEDIA_ERROR:
                setErrorMessage(`Media error, retrying (${newRetryCount}/${maxRetries})...`);
                hlsInstance.recoverMediaError();
                break;
                
              default:
                hlsInstance.destroy();
                setErrorMessage(`Fatal error, reloading player (${newRetryCount}/${maxRetries})...`);
                
                setTimeout(() => {
                  const newHlsInstance = new Hls();
                  newHlsInstance.loadSource(currentSrc);
                  newHlsInstance.attachMedia(video);
                  setHls(newHlsInstance);
                }, 1000);
                break;
            }
          } else {
            hlsInstance.destroy();
            setErrorMessage(`Playback failed after ${maxRetries} attempts. Please try a different video or refresh the page.`);
          }
        }
      });

      video.addEventListener('progress', handleProgress);


      return () => {
        hlsInstance.destroy();
        video.removeEventListener('progress', handleProgress);
      };
    } else {
      // Direct video file (MP4, etc.) or HLS natively supported (Safari)
      video.src = currentSrc;

      
      // Remember playback position when switching qualities for MP4s
      video.addEventListener('loadedmetadata', () => {
        if (currentPosition > 0) {
          video.currentTime = currentPosition;
        }
        
        if (wasPlaying) {
          video.play().catch(error => {
            console.error('Resume after quality change failed:', error);
          });
        }
      }, { once: true });
      
      // Handle standard HTML5 video errors
      const handleVideoError = () => {
        if (video.error) {
          const errorCodes = {
            1: 'MEDIA_ERR_ABORTED - Fetching process aborted by user',
            2: 'MEDIA_ERR_NETWORK - Error occurred when downloading',
            3: 'MEDIA_ERR_DECODE - Error occurred when decoding',
            4: 'MEDIA_ERR_SRC_NOT_SUPPORTED - Video not supported',
          };
          
          const errorMessage = errorCodes[video.error.code] || 'Unknown video error';
          setErrorMessage(`Video Error: ${errorMessage}`);
          setIsPlaying(false);
        }
      };
      
      video.addEventListener('error', handleVideoError);
      
      if (autoPlay && !currentPosition) {
        video.play().catch((error) => {
          console.error('Playback failed:', error);
          setIsPlaying(false);
          setErrorMessage(`Playback failed: ${error.message}`);
        });
      }
      
      return () => {
        video.removeEventListener('error', handleVideoError);
      };
    }
  }, [currentSrc, autoPlay, retryCount]);

  // Handle quality changes for HLS
  useEffect(() => {
    if (!hls || !isHLSSource) return;
    
    const qualityLevel = parseInt(selectedQuality);
    if (!isNaN(qualityLevel)) {
      // Set HLS quality level
      hls.currentLevel = qualityLevel;
    }
  }, [selectedQuality, hls, isHLSSource]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setVideoData = () => {
      setDuration(video.duration);
    };

    const updateTime = () => {
      setCurrentTime(video.currentTime);
    };

    const handleBufferingStart = () => {
      setIsBuffering(true);
    };

    const handleBufferingEnd = () => {
      setIsBuffering(false);
    };

    if (video.readyState >= 2) {
      setVideoData();
    }

    video.addEventListener('loadedmetadata', setVideoData);
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('ended', () => setIsPlaying(false));
    video.addEventListener('waiting', handleBufferingStart);
    video.addEventListener('playing', handleBufferingEnd);

    return () => {
      video.removeEventListener('loadedmetadata', setVideoData);
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('ended', () => setIsPlaying(false));
      video.removeEventListener('waiting', handleBufferingStart);
      video.removeEventListener('playing', handleBufferingEnd);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch((error) => {
        console.error('Playback failed:', error);
        setIsPlaying(false);
        setErrorMessage(`Playback failed: ${error.message}`);
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    video.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = playbackSpeed;
  }, [playbackSpeed]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement === videoContainerRef.current ||
          (document as any).webkitFullscreenElement === videoContainerRef.current ||
          (document as any).mozFullScreenElement === videoContainerRef.current ||
          (document as any).msFullscreenElement === videoContainerRef.current
      );
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !videoRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;

    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleFullscreen = () => {
    const container = videoContainerRef.current;
    if (!container) return;

    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((container as any).mozRequestFullScreen) {
        (container as any).mozRequestFullScreen();
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  };


  const handleRetry = () => {
    setErrorMessage(null);
    setRetryCount(0);
    
    const video = videoRef.current;
    if (!video) return;
    
    if (isHLSSource && hls) {
      hls.destroy();
      
      const newHlsInstance = new Hls();
      newHlsInstance.loadSource(currentSrc);
      newHlsInstance.attachMedia(video);
      setHls(newHlsInstance);
    } else {
      video.load();
      video.play().catch(error => {
        console.error('Retry failed:', error);
        setErrorMessage(`Retry failed: ${error.message}`);
      });
    }
    
    setIsPlaying(true);
  };

  return (
    <div
      ref={videoContainerRef}
      className="w-full max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden"
    >
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full"
          onClick={() => !errorMessage && setIsPlaying(!isPlaying)}
          style={{ width, height }}
        />
        
        {/* Error overlay */}
        {errorMessage && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white p-4">
            <div className="text-red-500 text-lg font-bold mb-4">Error</div>
            <div className="text-center mb-4">{errorMessage}</div>
            <button 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleRetry}
            >
              Retry
            </button>
          </div>
        )}
        
        {!errorMessage && (
          <>
            {isBuffering && <BufferingIndicator />}
            <VideoControls
              bufferedProgress={bufferedProgress}
              isPlaying={isPlaying}
              isMuted={isMuted}
              volume={volume}
              currentTime={currentTime}
              duration={duration}
              progress={(currentTime / duration) * 100}
              onPlayPause={() => setIsPlaying(!isPlaying)}
              onMuteUnmute={() => setIsMuted(!isMuted)}
              onVolumeChange={setVolume}
              onProgressBarClick={handleProgressBarClick}
              onSettingsClick={() => setShowSettings(!showSettings)}
              onFullscreenClick={toggleFullscreen}
              progressRef={progressRef}
            />
            {showSettings && (
              <SettingsMenu
                playbackSpeed={playbackSpeed}
                qualityOptions={availableQualities}
                selectedQuality={selectedQuality}
                onSpeedChange={setPlaybackSpeed}
                onQualityChange={setSelectedQuality}
                onClose={() => setShowSettings(false)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Video;