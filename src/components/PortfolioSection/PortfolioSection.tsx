import { useState } from 'react';
import { motion } from 'framer-motion';
import VideoGallery from '../VideoGallery/VideoGallery';
import VideoModal from '../VideoModal/VideoModal';
import { videoProjects, categories } from '../../data/videos.data';
import type { VideoProject } from '../../data/videos.data';
import './PortfolioSection.scss';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredVideos, setFilteredVideos] = useState(videoProjects);
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'Todos') {
      setFilteredVideos(videoProjects);
    } else {
      setFilteredVideos(videoProjects.filter(video => video.category === category));
    }
  };

  const handleVideoSelect = (video: VideoProject) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Portfólio Completo</h2>
          <p className="section-subtitle">
            Explore nossa coleção de projetos audiovisuais únicos
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="category-filters"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Video Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="gallery-container"
        >
          <VideoGallery
            videos={filteredVideos}
            layout="grid"
            showInfo={true}
            onVideoSelect={handleVideoSelect}
          />
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="stats-container"
        >
          <div className="stats-grid">
            <div className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {videoProjects.length}
              </motion.div>
              <span className="stat-label">Projetos</span>
            </div>
            <div className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {new Set(videoProjects.map(v => v.year)).size}
              </motion.div>
              <span className="stat-label">Anos de Trabalho</span>
            </div>
            <div className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                {new Set(videoProjects.map(v => v.category)).size}
              </motion.div>
              <span className="stat-label">Categorias</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default PortfolioSection;