import { motion } from 'framer-motion';
import { FiAward, FiCamera, FiFilm, FiUsers } from 'react-icons/fi';
import './AboutPage.scss';

const AboutPage = () => {
  const skills = [
    { name: 'Direção', level: 95 },
    { name: 'Cinematografia', level: 90 },
    { name: 'Edição', level: 88 },
    { name: 'Color Grading', level: 92 },
    { name: 'Pós-produção', level: 85 },
    { name: 'Motion Graphics', level: 80 },
  ];

  const services = [
    { icon: <FiFilm />, title: 'Direção', description: 'Desenvolvimento criativo e direção de projetos audiovisuais' },
    { icon: <FiCamera />, title: 'Cinematografia', description: 'Captação de imagem com sensibilidade artística e técnica' },
    { icon: <FiAward />, title: 'Pós-produção', description: 'Edição, color grading e finalização profissional' },
    { icon: <FiUsers />, title: 'Coordenação', description: 'Gestão de equipe e produção executiva' },
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hero-section"
        >
          <div className="hero-content">
            <h1>Sobre Mim</h1>
            <p className="tagline">Criador visual apaixonado por contar histórias através da imagem em movimento</p>
            
            <div className="bio">
              <p>
                Com mais de 8 anos de experiência no mercado audiovisual, especializei-me 
                na criação de conteúdo que une técnica apurada e sensibilidade artística. 
                Meu trabalho abrange desde documentários autorais até produções comerciais 
                de grande escala, sempre buscando a excelência em cada frame.
              </p>
              <p>
                Acredito no poder transformador do audiovisual e na capacidade de conectar 
                pessoas através de narrativas visuais impactantes. Cada projeto é uma 
                oportunidade de explorar novas perspectivas e criar experiências memoráveis.
              </p>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <div className="image-overlay">
                <span>Visual Storyteller</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Habilidades */}
        <section className="skills-section">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Serviços */}
        <section className="services-section">
          <h2>Serviços</h2>
          <div className="services-grid">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="service-card"
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experiência */}
        <section className="experience-section">
          <h2>Experiência & Formação</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2021 - Presente</div>
              <div className="timeline-content">
                <h3>Diretor e Editor Freelancer</h3>
                <p>Produção de conteúdo para marcas nacionais e internacionais</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018 - 2021</div>
              <div className="timeline-content">
                <h3>Cinematógrafo - Produtora Visual</h3>
                <p>Coordenação de equipes e direção de fotografia em projetos diversos</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015 - 2018</div>
              <div className="timeline-content">
                <h3>Bacharelado em Audiovisual</h3>
                <p>Universidade Federal - Especialização em Direção Cinematográfica</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;