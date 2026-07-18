import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FiInstagram } from 'react-icons/fi';
import type { InstagramMedia } from '../../hooks/useInstagramFeed';
import './InstagramFeed.scss';

interface InstagramFeedProps {
  media: InstagramMedia[];
  isLoading: boolean;
}

const InstagramFeed = ({ media, isLoading }: InstagramFeedProps) => {
  const swiperRef = useRef(null);

  if (isLoading) {
    return (
      <div className="instagram-feed-skeleton">
        <div className="skeleton-grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton-card">
              <div className="skeleton-image" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (media.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="instagram-feed"
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        grabCursor
        className="instagram-swiper"
      >
        {media.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.a
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="instagram-card"
            >
              <div className="instagram-card-media">
                <img
                  src={item.media_url}
                  alt={item.caption?.slice(0, 100) || 'Post do Instagram'}
                  loading="lazy"
                />
                <div className="instagram-card-overlay">
                  <FiInstagram />
                </div>
              </div>
            </motion.a>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default InstagramFeed;