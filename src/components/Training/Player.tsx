import React, { useEffect, useRef, useState } from "react";

// SVG Icons
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="white" />
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 19V5H18V19H14ZM6 19V5H10V19H6Z" fill="white" />
  </svg>
);

// PlaybackRateControlButton component
const PlaybackRateControlButton = React.forwardRef<
  HTMLDivElement,
  { onClick?: React.MouseEventHandler; playbackRate: number }
>((props, ref) => (
  <div ref={ref} style={{ cursor: "pointer" }} onClick={props.onClick}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        width: "40px",
        borderRadius: "12px",
        marginTop: "-8px",
        transition: "500ms opacity",
      }}
    >
      <span style={{ color: "white", fontWeight: 700, letterSpacing: "0.5px", position: "relative", top: "-1px" }}>
        <span style={{ fontSize: "14px" }}>{props.playbackRate}</span>
        <span style={{ fontSize: "11px" }}>x</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          style={{ marginLeft: "-1px", marginRight: "-4px", opacity: "0.5", position: "relative", bottom: "-1px" }}
        >
          <path d="M6 9L12 15L18 9" stroke="white" />
        </svg>
      </span>
    </div>
  </div>
));

// Main Player component
interface PlayerProps {
  url: string;
  muted?: boolean;
  autoPlay?: boolean;
}

const Player: React.FC<PlayerProps> = ({ url, autoPlay = false, muted = false }) => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [durationSec, setDurationSec] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);

  // Format time helper function
  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const onWaiting = () => {
      if (isPlaying) setIsPlaying(false);
      setIsWaiting(true);
    };

    const onPlay = () => {
      if (isWaiting) setIsWaiting(false);
      setIsPlaying(true);
    };

    const onPause = () => {
      setIsPlaying(false);
      setIsWaiting(false);
    };

    const onProgress = () => {
      if (!videoElement.buffered || !bufferRef.current) return;
      if (!videoElement.buffered.length) return;
      const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
      const duration = videoElement.duration;
      if (bufferRef.current && duration > 0) {
        bufferRef.current.style.width = `${(bufferedEnd / duration) * 100}%`;
      }
    };

    const onTimeUpdate = () => {
      setIsWaiting(false);
      setDurationSec(videoElement.duration);
      setElapsedSec(videoElement.currentTime);
      if (progressRef.current && videoElement.duration > 0) {
        progressRef.current.style.width = `${(videoElement.currentTime / videoElement.duration) * 100}%`;
      }
    };

    videoElement.addEventListener("progress", onProgress);
    videoElement.addEventListener("timeupdate", onTimeUpdate);
    videoElement.addEventListener("waiting", onWaiting);
    videoElement.addEventListener("play", onPlay);
    videoElement.addEventListener("playing", onPlay);
    videoElement.addEventListener("pause", onPause);

    return () => {
      videoElement.removeEventListener("progress", onProgress);
      videoElement.removeEventListener("timeupdate", onTimeUpdate);
      videoElement.removeEventListener("waiting", onWaiting);
      videoElement.removeEventListener("play", onPlay);
      videoElement.removeEventListener("playing", onPlay);
      videoElement.removeEventListener("pause", onPause);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }
  };

  const seekToPosition = (pos: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration * pos;
    }
  };

  // Purple theme colors
  const themeColors = {
    primary: "#8A2BE2", // Purple
    secondary: "#9370DB", // Medium Purple
    background: "rgba(138, 43, 226, 0.5)",
    hover: "rgba(147, 112, 219, 0.4)",
    menuBg: "#4B0082", // Indigo
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {isWaiting && (
        <div
          style={{
            position: "absolute",
            color: themeColors.primary,
          }}
        >
          Loading...
        </div>
      )}
      <video
        autoPlay={autoPlay}
        muted={muted}
        src={url}
        onClick={handlePlayPauseClick}
        ref={videoRef}
        style={{
          flexShrink: 1,
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100px",
          background: "linear-gradient(rgba(0, 0, 0, 0), rgba(75, 0, 130, 0.7))",
          position: "absolute",
          opacity: 1,
          transition: "opacity 0.5s linear",
          left: 0,
          bottom: 0,
          display: "flex",
          alignItems: "flex-end",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "4px",
              marginBottom: "0.5rem",
              borderRadius: "10px",
              backgroundColor: "rgba(193, 193, 193, 0.5)",
              cursor: "pointer",
            }}
            onClick={(e) => {
              const { left, width } = e.currentTarget.getBoundingClientRect();
              seekToPosition((e.clientX - left) / width);
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                ref={progressRef}
                style={{
                  height: "100%",
                  backgroundColor: themeColors.primary,
                  zIndex: 1,
                }}
              />
              <div
                ref={bufferRef}
                style={{
                  position: "absolute",
                  height: "100%",
                  backgroundColor: themeColors.secondary,
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={handlePlayPauseClick}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {!isPlaying ? <PlayIcon /> : <PauseIcon />}
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 600,
                  gap: "4px",
                  transition: "500ms opacity",
                  marginTop: "-8px",
                  padding: 0,
                }}
              >
                <span style={{ color: "white" }}>{formatTime(elapsedSec)}</span>
                <span style={{ color: "white" }}>/</span>
                <span style={{ color: "white" }}>{formatTime(durationSec)}</span>
              </div>
            </div>
            <div>
              <PlaybackRateControlButton
                playbackRate={playbackRate}
                onClick={() => {
                  // Open a custom dropdown for playback rate
                  const newRate = prompt("Enter playback rate (e.g., 1, 1.5, 2):");
                  if (newRate && !isNaN(Number(newRate))) {
                    setPlaybackRate(Number(newRate));
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;