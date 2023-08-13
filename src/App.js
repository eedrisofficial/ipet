import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Bird from "./Components/Pets/Bird";
import Cat from "./Components/Pets/Cat";
import Dog from "./Components/Pets/Dog";

function App() {
  return (
    <div className="bg-[#FFFFFF] ">
      <Navbar />
      <Hero />
      <Dog />
      <Cat />
      <Bird />
      <Footer />
    </div>
  );
}

export default App;
