import { motion } from 'framer-motion';
import { FiAward, FiCamera, FiFilm, FiUsers, FiTrendingUp, FiTarget } from 'react-icons/fi';
import './AboutSection.scss';

const AboutSection = () => {

  const services = [
    { icon: <FiFilm />, title: 'Direção', description: 'Desenvolvimento criativo e direção de projetos audiovisuais' },
    { icon: <FiCamera />, title: 'Cinematografia', description: 'Captação de imagem com sensibilidade artística e técnica' },
    { icon: <FiAward />, title: 'Pós-produção', description: 'Edição, color grading e finalização profissional' },
    { icon: <FiUsers />, title: 'Coordenação', description: 'Gestão de equipe e produção executiva' },
    { icon: <FiTrendingUp />, title: 'Marketing Digital', description: 'Estratégias de marketing para maximizar alcance e engajamento' },
    { icon: <FiTarget />, title: 'Tráfego Pago', description: 'Gestão de campanhas pagas para resultados mensuráveis' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Criadores visuais apaixonados por contar histórias através da imagem em movimento
          </p>
        </motion.div>

        {/* Hero Content */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <div className="bio-content">
            <div className="bio-text">
              <h3>Visual Storytellers</h3>
              <p>
                Com mais de 8 anos de experiência no mercado audiovisual, especializamo-nos 
                na criação de conteúdo que une técnica apurada e sensibilidade artística. 
                Nosso trabalho abrange desde documentários autorais até produções comerciais 
                de grande escala, sempre buscando a excelência em cada frame.
              </p>
              <p>
                Acreditamos no poder transformador do audiovisual e na capacidade de conectar 
                pessoas através de narrativas visuais impactantes. Cada projeto é uma 
                oportunidade de explorar novas perspectivas e criar experiências memoráveis.
              </p>
            </div>

            <div className="bio-image">
              <div className="image-placeholder">
                <div className="image-overlay">
                  <span>Visual Storyteller</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="services-section"
        >
          <h3>Serviços</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default AboutSection;