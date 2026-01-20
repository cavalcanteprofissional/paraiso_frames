import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactPlayer from 'react-player';
import { 
  FiPlay, FiPause, FiVolume2, FiVolumeX, 
  FiMaximize, FiMinimize, FiSkipForward, 
  FiSkipBack 
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './VideoPlayer.scss';

interface ReactPlayerRef {
  seekTo: (fraction: number) => void;
}

interface VideoPlayerProps {
  url: string;
  title?: string;
  autoPlay?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  showControls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  title,
  autoPlay = false,
  onNext,
  onPrevious,
  showControls = true
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  
const playerRef = useRef<ReactPlayerRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const uiTimeoutRef = useRef<number | null>(null);

  // Auto-hide UI após 3 segundos
const resetUITimeout = useCallback(() => {
    if (uiTimeoutRef.current) clearTimeout(uiTimeoutRef.current);
    setShowUI(true);
    uiTimeoutRef.current = setTimeout(() => setShowUI(false), 3000);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    resetUITimeout();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    resetUITimeout();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
    resetUITimeout();
  };

  const handleProgress = (state: { played: number, loaded: number }) => {
    setPlayed(state.played);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTo = parseFloat(e.target.value);
    setPlayed(seekTo);
    playerRef.current?.seekTo(seekTo);
    resetUITimeout();
  };

const formatTime = (seconds: number) => {
    if (!seconds || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

// eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
  useEffect(() => {
    resetUITimeout();
  }, [resetUITimeout]);

  useEffect(() => {
    return () => {
      if (uiTimeoutRef.current) clearTimeout(uiTimeoutRef.current);
    };
  }, []);

return (
    <div 
      className={`video-player ${isFullscreen ? 'fullscreen' : ''}`} 
      ref={containerRef}
      onMouseMove={resetUITimeout}
      onTouchStart={resetUITimeout}
    >
      <div className="player-wrapper">
<ReactPlayer
          {...{
            ref: playerRef as any,
            url,
            playing: isPlaying,
            volume,
            muted: isMuted,
            width: "100%",
            height: "100%",
            onProgress: handleProgress as any,
            onDuration: setDuration,
            onEnded: onNext
          } as any}
        />

        <AnimatePresence>
          {showUI && showControls && (
            <motion.div 
              className="video-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {title && (
                <div className="video-title">
                  <h2>{title}</h2>
                </div>
              )}

              <div className="video-controls">
                <div className="controls-left">
                  <button onClick={onPrevious} className="control-btn">
                    <FiSkipBack />
                  </button>
                  
                  <button onClick={handlePlayPause} className="control-btn play-pause">
                    {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
                  </button>
                  
                  <button onClick={onNext} className="control-btn">
                    <FiSkipForward />
                  </button>

                  <div className="volume-control">
                    <button 
                      onClick={() => setIsMuted(!isMuted)} 
                      className="control-btn"
                    >
                      {isMuted || volume === 0 ? <FiVolumeX /> : <FiVolume2 />}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={volume}
                      onChange={handleVolumeChange}
                      className="volume-slider"
                    />
                  </div>

                  <div className="time-display">
                    <span>{formatTime(played * duration)}</span>
                    <span>/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="controls-right">
                  <button onClick={toggleFullscreen} className="control-btn">
                    {isFullscreen ? <FiMinimize /> : <FiMaximize />}
                  </button>
                </div>
              </div>

              <div className="progress-bar-container">
                <input
                  type="range"
                  min={0}
                  max={0.999999}
                  step={0.001}
                  value={played}
                  onChange={handleSeek}
                  className="progress-bar"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VideoPlayer;