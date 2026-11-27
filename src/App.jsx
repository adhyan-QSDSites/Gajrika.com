
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import AboutPreview from "./sections/AboutPreview";
import Capabilities from "./sections/Capabilities";
import ProductCategories from "./sections/ProductCategories";
import WhyGajrika from "./sections/WhyGajrika";
import Manufacturing from "./sections/Manufacturing";
import ContactSection from "./sections/ContactSection";

import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll />

      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <Capabilities />
        <ProductCategories />
        <WhyGajrika />
        <Manufacturing />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
