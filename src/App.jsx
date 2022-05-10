import React, {useEffect} from "react";
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import  AOS  from "aos";
import "aos/dist/aos.css";






const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  }, [])

  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
};

export default App;
