import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ScrollIndicator } from './components/ScrollIndicator';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Hero />
      <ScrollIndicator />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
