import './App.css';
import { Routes, Route } from'react-router-dom';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Resume from './Resume/Resume';
import Skills from './Skills/Skills';
import Work from './Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Skill" element={<Skills/>}/>
        <Route path="/Work" element={<Work/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
