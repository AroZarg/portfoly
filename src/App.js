import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./css/main.css";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

function App() {
  return (

    <div className="App">
  <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/projects" element={<Projects/>}/>
          </Routes>
    <Footer />
  </Router>
 </div>

  );
}

export default App;
