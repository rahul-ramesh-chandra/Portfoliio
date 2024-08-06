import Test from "./Test";
import React from 'react';
import "./app.scss";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Qualification from "./components/qualification/Qualification";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
      <section id="Qualification">
        <Parallax type="qualification" />
      </section>
      <section>
        <Qualification />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
