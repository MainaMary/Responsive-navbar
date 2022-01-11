import Navbar from './components/navbar/Navbar';
import "./components/navbar/Navbar.css";
import Home from './components/Home';
import Signup from './components/Signup';
import Skills from './components/Skills';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    
    <Router>
    <Navbar />
    <Routes>
      <Route index path ="/" element={<Home/>} />
      <Route path ="/about" element={<About/>} />
      <Route path ="/skills" element={<Skills/>} />
      <Route path ="/signup" element={<Signup/>} />
    </Routes>
    </Router>
   
    
  );
}

export default App;
