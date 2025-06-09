import Header from './components/Header';
import Hero from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import "./App.css"
function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <div id="hero"><Hero /></div>
         <div id="education"><Education /></div>
<div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      
      <div id="contact"><Contact /></div>
   
    </div>
  );
}

export default App;
