import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';
import './ContactPage.scss';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status após 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FiMail />, title: 'Email', value: 'contato@paraisoframes.com', link: 'mailto:contato@paraisoframes.com' },
    { icon: <FiPhone />, title: 'Telefone', value: '+55 (11) 99999-9999', link: 'tel:+5511999999999' },
    { icon: <FiMapPin />, title: 'Localização', value: 'São Paulo, Brasil', link: 'https://maps.google.com' },
  ];

  const socialLinks = [
    { icon: <FiInstagram />, name: 'Instagram', url: 'https://instagram.com' },
    { icon: <FiYoutube />, name: 'YouTube', url: 'https://youtube.com' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com' },
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-header"
        >
          <h1>Contato</h1>
          <p className="subtitle">Vamos criar algo incrível juntos</p>
        </motion.div>

        <div className="contact-content">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="contact-info"
          >
            <div className="info-section">
              <h2>Entre em Contato</h2>
              <p>
                Estou sempre aberto a discutir novos projetos, ideias criativas 
                ou oportunidades para fazer parte da sua visão.
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="contact-detail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="detail-icon">{info.icon}</div>
                    <div className="detail-content">
                      <span className="detail-title">{info.title}</span>
                      <span className="detail-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="social-section">
              <h3>Conecte-se</h3>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Nome *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sobre o que gostaria de conversar?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Conte-me sobre seu projeto, ideias ou perguntas..."
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  <FiSend />
                  Enviar Mensagem
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="success-message"
              >
                ✅ Mensagem enviada com sucesso! Entrarei em contato em breve.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Ocorreu um erro. Tente novamente.
              </div>
            )}
          </motion.form>
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="map-section"
        >
          <h2>Onde Estou</h2>
          <div className="map-placeholder">
            <div className="map-overlay">
              <FiMapPin size={48} />
              <p>São Paulo - Centro de Produção Audiovisual</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;