import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.scss';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Vídeo principal - YouTube placeholder
  const heroVideo = {
    url: 'https://www.youtube.com/watch?v=AALrH26HAmw',
    youtubeId: 'AALrH26HAmw',
    fallbackImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Cinematic Showreel',
    subtitle: 'Visual Storytelling Excellence'
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(e => {
        console.log('Autoplay prevented:', e);
        // Fallback para autoplay bloqueado
        video.muted = true;
        video.play();
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    
    // Tentar carregar o vídeo
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Overlay escuro para melhor contraste do texto */}
      <div className="hero-overlay"></div>
      
      {/* Vídeo de fundo em fullscreen */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroVideo.fallbackImage}
        >
          {/* YouTube embed as primary source */}
          <source src={`https://www.youtube.com/embed/${heroVideo.youtubeId}?autoplay=1&mute=1&playlist=${heroVideo.youtubeId}&loop=1`} type="video/mp4" />
          
          {/* Fallback para navegadores sem suporte */}
          <img src={heroVideo.fallbackImage} alt={heroVideo.title} />
        </video>
        
        {/* Loading state */}
        {!isLoaded && (
          <div className="video-loading">
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>

      {/* Conteúdo sobreposto ao vídeo */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hero-title"
          >
            {heroVideo.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hero-subtitle"
          >
            {heroVideo.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="hero-cta"
          >
            <a href="#portfolio" className="cta-button">
              Veja Mais
            </a>
            <a href="#contact" className="cta-button secondary">
              Entre em contato
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Role para explorar</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;