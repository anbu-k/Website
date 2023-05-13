import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Home from './Home';

const Resume = () => {
  return (
    <div style={{ backgroundColor: '#2D2D2D', color: 'white', minHeight: '100vh' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.render(<Resume />, document.getElementById('root'));
