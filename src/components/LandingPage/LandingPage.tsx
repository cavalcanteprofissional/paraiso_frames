import HeroSection from '../Hero/HeroSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import InstagramSection from '../InstagramFeed/InstagramSection';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <PortfolioSection />
      <InstagramSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;