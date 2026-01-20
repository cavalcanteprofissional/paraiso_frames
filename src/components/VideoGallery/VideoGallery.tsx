import { motion } from 'framer-motion';
import { FiPlay, FiFilm } from 'react-icons/fi';
import type { VideoProject } from '../../data/videos.data';
import './VideoGallery.scss';

interface VideoGalleryProps {
  videos: VideoProject[];
  layout?: 'grid' | 'carousel';
  onVideoSelect?: (video: VideoProject) => void;
  currentVideoId?: string;
  showInfo?: boolean;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  layout = 'grid',
  onVideoSelect,
  currentVideoId,
  showInfo = false
}) => {
const handleVideoClick = (video: VideoProject) => {
    if (onVideoSelect) {
      onVideoSelect(video);
    }
  };

  if (layout === 'carousel') {
    return (
      <div className="video-carousel">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className={`carousel-item ${currentVideoId === video.id ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleVideoClick(video)}
          >
            <div className="thumbnail">
              <img src={video.thumbnailUrl} alt={video.title} />
              <div className="play-overlay">
                <FiPlay size={24} />
              </div>
              <div className="duration-badge">
                {Math.floor(video.duration / 60)}:{String(video.duration % 60).padStart(2, '0')}
              </div>
            </div>
            {showInfo && (
              <div className="video-info">
                <h4>{video.title}</h4>
                <span className="category">{video.category}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <motion.div
          key={video.id}
          className="video-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => handleVideoClick(video)}
        >
          <div className="card-thumbnail">
            <img src={video.thumbnailUrl} alt={video.title} loading="lazy" />
            <div className="thumbnail-overlay">
              <div className="play-button">
                <FiPlay size={32} />
              </div>
              <div className="aspect-ratio">{video.aspectRatio}</div>
            </div>
            <div className="duration">
              <FiFilm size={14} />
              {Math.floor(video.duration / 60)}:{String(video.duration % 60).padStart(2, '0')}
            </div>
          </div>
          
          <div className="card-content">
            <h3>{video.title}</h3>
            <p className="description">{video.description}</p>
            <div className="card-meta">
              <span className="year">{video.year}</span>
              <span className="category">{video.category}</span>
              {video.client && <span className="client">{video.client}</span>}
            </div>
            <div className="tags">
              {video.tags.slice(0, 3).map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoGallery;