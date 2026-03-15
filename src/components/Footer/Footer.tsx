import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiInstagram />, name: 'Instagram', url: 'https://www.instagram.com/paraisoframes/' },
    { icon: <FaWhatsapp />, name: 'WhatsApp', url: 'https://wa.me/558599067269' },
    { icon: <FiYoutube />, name: 'YouTube', url: 'https://youtube.com' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/matheus-barros-015008251/' },
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
              <img src="/paraisoframes.svg" alt="Paraísmo Frames" className="logo-img" />
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
              <a href="tel:+558599067269" className="contact-item">
                <FiPhone />
                <span>+55 85 9906-7269</span>
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