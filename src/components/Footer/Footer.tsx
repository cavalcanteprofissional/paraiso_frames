import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiInstagram />, name: 'Instagram', url: 'https://instagram.com' },
    { icon: <FiYoutube />, name: 'YouTube', url: 'https://youtube.com' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <span className="logo-icon">🎬</span>
              <span className="logo-text">Paraíso Frames</span>
            </div>
            <p className="brand-description">
              Criando histórias visuais que inspiram e conectam. 
              Especialistas em produção audiovisual de alta qualidade.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Contato</h3>
            <div className="contact-items">
              <a href="mailto:contato@paraisoframes.com" className="contact-item">
                <FiMail />
                <span>contato@paraisoframes.com</span>
              </a>
              <a href="tel:+5585996859051" className="contact-item">
                <FiPhone />
                <span>+55 (85) 99685-9051</span>
              </a>
              <a href="https://maps.app.goo.gl/FjjXLcmrvQpzMBqh7" className="contact-item">
                <FiMapPin />
                <span>Fortaleza, Brasil</span>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>Redes Sociais</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="copyright">
            <p>&copy; {currentYear} Paraíso Frames. Todos os direitos reservados.</p>
          </div>
          <div className="credits">
            <p>Criado com ❤️ para contar histórias visuais</p>
            <p className="portfolio-link">
              Desenvolvido por{' '}
              <a 
                href="https://cavalcanteprofissional.github.io/cavalcanteprofissional/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Lucas Cavalcante
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;