import React from 'react';
import { motion } from 'framer-motion';
import './VideoSkeleton.scss';

interface VideoSkeletonProps {
  count?: number;
}

const VideoSkeleton: React.FC<VideoSkeletonProps> = ({ count = 1 }) => {
  return (
    <div className="video-skeleton-container">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="video-skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="skeleton-shimmer" />
          <div className="skeleton-content">
            <div className="skeleton-text skeleton-title" />
            <div className="skeleton-text skeleton-subtitle" />
            <div className="skeleton-meta">
              <div className="skeleton-chip" />
              <div className="skeleton-chip" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoSkeleton;