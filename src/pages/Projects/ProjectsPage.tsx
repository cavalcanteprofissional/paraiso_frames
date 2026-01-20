import { useState } from 'react';
import { motion } from 'framer-motion';
import VideoGallery from '../../components/VideoGallery/VideoGallery';
import { videoProjects, categories } from '../../data/videos.data';
import './ProjectsPage.scss';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredVideos, setFilteredVideos] = useState(videoProjects);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'Todos') {
      setFilteredVideos(videoProjects);
    } else {
      setFilteredVideos(videoProjects.filter(video => video.category === category));
    }
  };

  return (
    <div className="projects-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-header"
        >
          <h1>Portfólio</h1>
          <p className="subtitle">Seleção completa de trabalhos audiovisuais</p>
        </motion.div>

        {/* Filtros por Categoria */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Galeria */}
        <div className="gallery-container">
          <VideoGallery
            videos={filteredVideos}
            layout="grid"
            showInfo={true}
          />
        </div>

        {/* Estatísticas */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">{videoProjects.length}</span>
            <span className="stat-label">Projetos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {new Set(videoProjects.map(v => v.year)).size}
            </span>
            <span className="stat-label">Anos de Trabalho</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {new Set(videoProjects.map(v => v.category)).size}
            </span>
            <span className="stat-label">Categorias</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;