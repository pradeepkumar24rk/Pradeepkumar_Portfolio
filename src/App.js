import Navbar from './Component/Navbar/Navbar.jsx'
import './App.css'
import Intro from './Component/Intro/Intro.jsx';
import About from './Component/About/About.jsx';
import Skill from './Component/Skill/Skill.jsx';
import Project from './Component/Project/Project.jsx';
import Message from './Component/Message/Message.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Ex_card from './Component/Ex-card/Ex_card.jsx';
import Introduction from './Component/Introduction/Introduction.jsx';
import Skills from './Component/Skill/Skills.jsx';
import Achievement from './Component/Achievement/Achievement.jsx';
import CountView from './Component/CountView/CountView.jsx';


// import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        <Introduction/>
        {/* <Intro/> */}
        <About/>
        <Skills/>
        {/* <Skill/> */}
        {/* <Project/> */}
        <Ex_card/>
        <Achievement/>
        <Message/>
       
        <CountView/>
        <Footer/> 
        
        
       
      
    </div>
  );
}

export default App;
