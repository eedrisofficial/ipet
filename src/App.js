import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AboutUs from "./Components/NavbarComponents/AboutUs";
import Adopt from "./Components/NavbarComponents/Adopt";
import Donate from "./Components/NavbarComponents/Donate";
import Event from "./Components/NavbarComponents/Event";
import Contact from "./Components/NavbarComponents/Contact";
import Blog from "./Components/NavbarComponents/Blog";

function App() {
  return (
    <div className="bg-[#FFFFFF] ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
