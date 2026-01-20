import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <LandingPage />
    </div>
  );
}

export default App;