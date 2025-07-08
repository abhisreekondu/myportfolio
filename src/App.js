import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import "./App.css"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function App() {
  return (
    <motion.div 
      className="bg-black text-white font-sans"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div variants={item}>
        <Header />
      </motion.div>
      <motion.div variants={item} id="hero">
        <Hero />
      </motion.div>
      <motion.div variants={item} id="education">
        <Education />
      </motion.div>
      <motion.div variants={item} id="skills">
        <Skills />
      </motion.div>
      <motion.div variants={item} id="projects">
        <Projects />
      </motion.div>
      <motion.div variants={item} id="contact">
        <Contact />
      </motion.div>
    </motion.div>
  );
}

export default App;
