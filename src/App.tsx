
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';

function App() {
  return (
    <div className="min-h-screen bg-background text-slate-200 relative">
      <BackgroundEffects />
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
