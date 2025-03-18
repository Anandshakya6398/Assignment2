import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <div>
       <Navbar/>
       <Hero/>
       <Cards/>
       <Pricing/>
       <Contact/>
      </div>
    </>
  );
}

export default App;
