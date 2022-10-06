import About from "./Parts/About/About";
import CTA from "./Parts/CTA/CTA";
import Faq from "./Parts/Faq/Faq";
import Hero from "./Parts/Hero/Hero";
import Navbar from "./Parts/Navbar/Navbar";
import Trending from "./Parts/Trending/Trending";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Faq />
      <Trending />
      <CTA />
    </>
  );
}

export default App;
