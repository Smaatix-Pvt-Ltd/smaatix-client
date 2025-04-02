import React from 'react';

interface SettingsMenuProps {
  playbackSpeed: number;
  qualityOptions: { label: string; value: string }[];
  selectedQuality: string;
  onSpeedChange: (speed: number) => void;
  onQualityChange: (quality: string) => void;
  onClose: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
  playbackSpeed,
  qualityOptions,
  selectedQuality,
  onSpeedChange,
  onQualityChange,
  onClose,
}) => {
  return (
    <div className="absolute right-0 bottom-8 bg-gray-800 rounded p-2 shadow-lg">
      <div className="text-white text-xs mb-2">Playback Speed</div>
      {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
        <button
          key={speed}
          className={`block w-full text-left px-2 py-1 text-sm ${
            playbackSpeed === speed ? 'bg-purple-500 text-white' : 'text-gray-200 hover:bg-gray-700'
          }`}
          onClick={() => {
            onSpeedChange(speed);
            onClose();
          }}
        >
          {speed}x
        </button>
      ))}
      <div className="text-white text-xs mt-4 mb-2">Quality</div>
      {qualityOptions.map((option) => (
        <button
          key={option.value}
          className={`block w-full text-left px-2 py-1 text-sm ${
            selectedQuality === option.value ? 'bg-purple-500 text-white' : 'text-gray-200 hover:bg-gray-700'
          }`}
          onClick={() => {
            onQualityChange(option.value); // Pass the selected quality to the parent
            onClose();
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SettingsMenu;