import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="experience">
          <Experience />
        </div>
      </Router>
    </div>
  );
}

ReactDOM.render(<Resume />, document.getElementById('root'));
