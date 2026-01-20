import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import type { VideoProject } from '../../data/videos.data';
import './VideoModal.scss';

interface VideoModalProps {
  video: VideoProject;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="video-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          className="video-modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, type: "spring", damping: 25 }}
        >
          {/* Modal Header */}
          <div className="modal-header">
            <div className="video-info">
              <h3 id="modal-title" className="modal-title">{video.title}</h3>
              <div className="video-meta">
                <span className="category">{video.category}</span>
                <span className="year">{video.year}</span>
                {video.client && <span className="client">{video.client}</span>}
              </div>
            </div>
            <button 
              className="close-button"
              onClick={onClose}
              aria-label="Close video modal"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Video Player */}
          <div className="modal-video">
            <VideoPlayer
              url={video.videoUrl}
              title={video.title}
              autoPlay={true}
              showControls={true}
            />
          </div>

          {/* Video Description */}
          <div className="modal-description">
            <p>{video.description}</p>
            <div className="video-tags">
              {video.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;