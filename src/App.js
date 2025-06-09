import Header from './components/Header';
import Hero from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import "./App.css"
function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <div id="hero"><Hero /></div>
         <div id="education"><Education /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Footer /></div>
   
    </div>
  );
}

export default App;
