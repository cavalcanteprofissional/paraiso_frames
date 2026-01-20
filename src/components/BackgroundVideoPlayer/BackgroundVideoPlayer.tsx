import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideoPlayer.scss';

interface BackgroundVideoPlayerProps {
  url: string;
  playing: boolean;
  onEnded?: () => void;
  onReady?: () => void;
}

const BackgroundVideoPlayer: React.FC<BackgroundVideoPlayerProps> = ({
  url,
  playing,
  onEnded,
  onReady,
}) => {
  const playerProps = {
    className: "background-video",
    playing,
    url,
    muted: true,
    loop: true,
    controls: false,
    playsinline: true,
    onEnded,
    onReady,
    width: "100%" as const,
    height: "100%" as const,
  };

  return (
    <div className="background-video-player">
      <ReactPlayer {...playerProps} />
    </div>
  );
};

export default BackgroundVideoPlayer;