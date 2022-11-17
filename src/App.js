import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Home from "./components/Home";
import About from "./components/About";
import Apply from "./components/Apply";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import ThemeToggle from './components/ThemeToggleButton';

function App() {
  return (
   <>
    <ThemeToggle />
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
   </>
  );
}

export default App;
