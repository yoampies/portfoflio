import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ProjectDetails from "./sections/ProjectDetails";
import Contact from "./sections/Contact";

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
}

function App() {

  return (
    <div>
      <Router>
        <ScrollToTopOnNavigate />
        <Routes>
          <Route exact path="/" element={<Home />} />  
          <Route exact path="/about" element={<About />} />  
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/:projectID" element={<ProjectDetails />} />
          <Route exact path="/contact" element={<Contact />} />  
        </Routes>
      </Router>
    </div>
  )
}


export default App