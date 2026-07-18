import { motion } from 'framer-motion';
import { FiInstagram, FiExternalLink } from 'react-icons/fi';
import InstagramFeed from './InstagramFeed';
import { useInstagramFeed } from '../../hooks/useInstagramFeed';
import './InstagramSection.scss';

const InstagramSection = () => {
  const { media, isLoading, error } = useInstagramFeed(12);
  const isConfigured = !error;

  return (
    <section id="instagram" className="instagram-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            <FiInstagram className="title-icon" />
            Siga-nos no Instagram
          </h2>
          <p className="section-subtitle">
            Acompanhe nosso trabalho diário e bastidores
          </p>
        </motion.div>

        {isConfigured && !error ? (
          <InstagramFeed media={media} isLoading={isLoading} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="instagram-fallback"
          >
            <div className="fallback-card">
              <div className="fallback-icon">
                <FiInstagram />
              </div>
              <h3 className="fallback-title">Siga-nos no Instagram</h3>
              <p className="fallback-text">
               Configure a API do Instagram para exibir o feed aqui.
                <br />
                Until then, follow us directly:
              </p>
              <a
                href="https://www.instagram.com/paraisoframes/"
                target="_blank"
                rel="noopener noreferrer"
                className="fallback-btn"
              >
                <span>Seguir no Instagram</span>
                <FiExternalLink />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InstagramSection;