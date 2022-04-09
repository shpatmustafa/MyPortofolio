import { Route, Routes, Navigate } from "react-router-dom";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import Home from "../pages/Home.js";
import Portfolio from "../pages/Portfolio.js";

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RouteConfig;
