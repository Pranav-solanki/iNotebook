import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Notestate from "./context/Notes/notestate";

function App() {
  return (
    <Notestate>
        <Router>
          <Navbar />
      <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
        </Router>
    </Notestate>
  );
}

export default App;
