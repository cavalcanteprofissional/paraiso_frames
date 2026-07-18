import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideoPlayer.scss';

interface BackgroundVideoPlayerProps {
  url: string;
  youtubeId?: string;
  playing: boolean;
  onEnded?: () => void;
  onReady?: () => void;
}

const BackgroundVideoPlayer: React.FC<BackgroundVideoPlayerProps> = ({
  url,
  youtubeId,
  playing,
  onEnded,
  onReady,
}) => {
  // Use YouTube embed if youtubeId is provided, otherwise use direct URL
  const videoUrl = youtubeId 
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=${playing ? 1 : 0}&mute=1&playlist=${youtubeId}&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0`
    : url;

  const playerProps = {
    className: "background-video",
    playing,
    url: videoUrl,
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