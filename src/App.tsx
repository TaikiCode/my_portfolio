import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import './App.scss';
import AboutMe from './components/aboutMe/AboutMe';
import Experiences from './components/experiences/Experiences';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Experiences />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
