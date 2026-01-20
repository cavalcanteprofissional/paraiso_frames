import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { videoProjects } from '../../data/videos.data';
import './HeroSection.scss';

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => 
      prev === videoProjects.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prev) => 
      prev === 0 ? videoProjects.length - 1 : prev - 1
    );
  };

  const handleVideoSelect = (index: number) => {
    setCurrentVideoIndex(index);
    setAutoplayEnabled(true);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case ' ':
          e.preventDefault();
          setAutoplayEnabled(!autoplayEnabled);
          break;
        case 'ArrowRight':
          handleNextVideo();
          break;
        case 'ArrowLeft':
          handlePreviousVideo();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [autoplayEnabled]);

  const currentVideo = videoProjects[currentVideoIndex];

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Featured Video Player */}
          <motion.div 
            className="hero-video"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <VideoPlayer
              url={currentVideo.videoUrl}
              title={currentVideo.title}
              autoPlay={autoplayEnabled}
              onNext={handleNextVideo}
              onPrevious={handlePreviousVideo}
              showControls={true}
            />
          </motion.div>

          {/* Video Information */}
          <motion.div
            className="hero-info"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="video-details">
              <motion.h1 
                key={currentVideo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="video-title"
              >
                {currentVideo.title}
              </motion.h1>
              
              <motion.p 
                key={`desc-${currentVideo.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="video-description"
              >
                {currentVideo.description}
              </motion.p>

              <motion.div 
                className="video-meta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="category">{currentVideo.category}</span>
                <span className="year">{currentVideo.year}</span>
                {currentVideo.client && (
                  <span className="client">Client: {currentVideo.client}</span>
                )}
              </motion.div>

              <motion.div 
                className="video-navigation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="video-counter">
                  <span className="current">{currentVideoIndex + 1}</span>
                  <span className="separator">/</span>
                  <span className="total">{videoProjects.length}</span>
                </div>
                
                <div className="keyboard-shortcuts">
                  <div className="shortcut">
                    <kbd>←</kbd>
                    <span>Previous</span>
                  </div>
                  <div className="shortcut">
                    <kbd>Space</kbd>
                    <span>Play/Pause</span>
                  </div>
                  <div className="shortcut">
                    <kbd>→</kbd>
                    <span>Next</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Thumbnail Navigation */}
            <motion.div 
              className="thumbnail-nav"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3>More Projects</h3>
              <div className="thumbnails">
                {videoProjects.slice(0, 4).map((video, index) => (
                  <motion.button
                    key={video.id}
                    className={`thumbnail-item ${currentVideoIndex === index ? 'active' : ''}`}
                    onClick={() => handleVideoSelect(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={video.thumbnailUrl} alt={video.title} />
                    <div className="thumbnail-overlay">
                      <span className="duration">
                        {Math.floor(video.duration / 60)}:{String(video.duration % 60).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;