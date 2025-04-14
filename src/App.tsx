// App.tsx

import Vision from './components/vision';
import WhyJoin from './components/whyjoin';
import Events from './components/events/events';  // Updated path
import Activities from './components/activities/Activities';  // Note the capital A
import Team from './components/team/Team';  // Note the capital T
import About from './components/about';
import Footer from './components/footer';
import Hero from './components/hero';
import Mission from './components/mission';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Vision />
      <WhyJoin />
      <Events />
      <Activities />
      <Team />
      <Footer />
    </div>
  );
}

export default App;