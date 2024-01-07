import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route exact path="/projects" element={<Projects />} />
    <Route path="/contacts" element={<Contacts />} />
  </Routes>
);

export default App;
