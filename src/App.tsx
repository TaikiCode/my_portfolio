import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Experiences from './components/experiences/Experiences';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Experiences />
      <Skills />
      <Portfolio />
    </>
  );
}

export default App;
