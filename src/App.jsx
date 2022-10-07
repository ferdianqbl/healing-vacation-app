import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "./Parts/About/About";
import CTA from "./Parts/CTA/CTA";
import Faq from "./Parts/Faq/Faq";
import Footer from "./Parts/Footer/Footer";
import Hero from "./Parts/Hero/Hero";
import Navbar from "./Parts/Navbar/Navbar";
import Review from "./Parts/Review/Review";
import Trending from "./Parts/Trending/Trending";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Faq />
      <Trending />
      <Review />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
