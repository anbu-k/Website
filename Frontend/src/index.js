import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import About from './About';
import Education from './Education';
import Experience from './Projects';
import Home from './Home';
import BGimage from './images/BACKGROUND.jpg';


const Resume = () => {
  return (
    <div style={{
      backgroundImage: `url(${BGimage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      minHeight: '100vh'
  }}>
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
        <div id="Projects">
          <Experience />
        </div>
      </Router>
    </div>
  );
}


ReactDOM.render(<Resume />, document.getElementById('root'));
