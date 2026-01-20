import HeroSection from '../Hero/HeroSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;