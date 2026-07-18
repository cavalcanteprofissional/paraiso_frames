import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiChevronLeft, FiChevronRight, 
  FiInstagram, FiYoutube, FiExternalLink,
  FiPlay, FiPause
} from 'react-icons/fi';
import type { VideoProject } from '../../data/videos.data';

import './VideoSidebarPanel.scss';

interface VideoSidebarPanelProps {
  currentVideo: VideoProject;
  allVideos: VideoProject[];
  currentIndex: number;
  onVideoSelect: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onPlayPause: () => void;
  isPlaying: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const VideoSidebarPanel: React.FC<VideoSidebarPanelProps> = ({
  currentVideo,
  allVideos,
  currentIndex,
  onVideoSelect,
  onNext,
  onPrevious,
  onPlayPause,
  isPlaying,
  isOpen,
  onToggle
}) => {
  const [isProjectListOpen, setIsProjectListOpen] = useState(false);


  const formatTime = (seconds: number) => {
    if (!seconds || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };



  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`}
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isOpen ? <FiX /> : <FiChevronLeft />}
      </motion.button>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="video-sidebar-panel"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="sidebar-header">
              <h2>Paraíso Frames</h2>
              <button className="close-btn" onClick={onToggle}>
                <FiX />
              </button>
            </div>

            {/* Current Project Info */}
            <div className="current-project">
              <div className="project-meta">
                <span className="category">{currentVideo.category}</span>
                <span className="year">{currentVideo.year}</span>
                {currentVideo.client && (
                  <span className="client">{currentVideo.client}</span>
                )}
              </div>
              
              <h3 className="project-title">{currentVideo.title}</h3>
              
              <p className="project-description">{currentVideo.description}</p>
              
              <div className="project-tags">
                {currentVideo.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="tag">#{tag}</span>
                ))}
              </div>

              <div className="video-duration">
                Duration: {formatTime(currentVideo.duration)}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="navigation-controls">
              <div className="video-counter">
                <span className="current">{currentIndex + 1}</span>
                <span className="separator">/</span>
                <span className="total">{allVideos.length}</span>
              </div>

              <div className="control-buttons">
                <button 
                  className="nav-btn play-pause"
                  onClick={onPlayPause}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <FiPause /> : <FiPlay />}
                </button>
                
                <button 
                  className="nav-btn prev"
                  onClick={onPrevious}
                  title="Previous video"
                >
                  <FiChevronLeft />
                </button>
                
                <button 
                  className="nav-btn next"
                  onClick={onNext}
                  title="Next video"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>

            {/* Project List */}
            <div className={`project-list ${isProjectListOpen ? 'expanded' : 'collapsed'}`}>
              <button 
                className="project-list-toggle"
                onClick={() => setIsProjectListOpen(!isProjectListOpen)}
              >
                {isProjectListOpen ? 'Hide' : 'Show'} All Projects
              </button>

              <AnimatePresence>
                {isProjectListOpen && (
                  <motion.div
                    className="project-items"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {allVideos.map((video, index) => (
                      <motion.button
                        key={video.id}
                        className={`project-item ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => {
                          onVideoSelect(index);
                          setIsProjectListOpen(false);
                        }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="project-thumbnail">
                          <img src={video.thumbnailUrl} alt={video.title} />
                          <div className="thumbnail-overlay">
                            <FiPlay />
                          </div>
                        </div>
                        <div className="project-info">
                          <h4>{video.title}</h4>
                          <div className="project-meta-small">
                            <span>{video.category}</span>
                            <span>{formatTime(video.duration)}</span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a 
                  href="#" 
                  className="social-link instagram"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>
                <a 
                  href="#" 
                  className="social-link youtube"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FiYoutube />
                </a>
                <a 
                  href="#" 
                  className="social-link website"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="contact-cta">
              <h4>Ready to Create?</h4>
              <p>Let's bring your vision to life</p>
              <button className="contact-btn">
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoSidebarPanel;