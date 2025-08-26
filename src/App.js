import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Notestate from "./context/Notes/notestate";
import Alert from "./components/Alert";
import Login from "./components/Login";
function App() {
  return (
    <Notestate>
      <Router>
        <Navbar />
        <Alert message="This is my iNotebook app"/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Notestate>
  );
}

export default App;
