import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoGallery from '../../components/VideoGallery/VideoGallery';
import { videoProjects } from '../../data/videos.data';
import './HomePage.scss';

const HomePage = () => {
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

const handleVideoSelect = (video: any) => {
    const index = videoProjects.findIndex(v => v.id === video.id);
    if (index !== -1) {
      setCurrentVideoIndex(index);
      setAutoplayEnabled(true);
    }
  };

  // Controle por teclado
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
    <div className="home-page">
      {/* Player Principal */}
      <section className="hero-section">
        <VideoPlayer
          url={currentVideo.videoUrl}
          title={currentVideo.title}
          autoPlay={autoplayEnabled}
          onNext={handleNextVideo}
          onPrevious={handlePreviousVideo}
          showControls={true}
        />
        
        <div className="video-info">
          <motion.div
            key={currentVideo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="info-card"
          >
            <h1>{currentVideo.title}</h1>
            <p className="description">{currentVideo.description}</p>
            <div className="meta-info">
              <span className="category">{currentVideo.category}</span>
              <span className="year">{currentVideo.year}</span>
              {currentVideo.client && (
                <span className="client">Client: {currentVideo.client}</span>
              )}
            </div>
            <div className="navigation-info">
              <span className="current-index">
                {currentVideoIndex + 1} / {videoProjects.length}
              </span>
              <div className="shortcuts">
                <kbd>←</kbd> <span>Previous</span>
                <kbd>Space</kbd> <span>Play/Pause</span>
                <kbd>→</kbd> <span>Next</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Galeria de Projetos */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Portfólio Completo</h2>
          <VideoGallery
            videos={videoProjects}
            onVideoSelect={handleVideoSelect}
            currentVideoId={currentVideo.id}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;