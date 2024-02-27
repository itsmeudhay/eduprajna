import { motion, useScroll, useSpring } from "framer-motion";
import AboutPage from "./components/about";
import Contact from "./components/contact/contact";
import CoursePage from "./components/courses/course";
import Hero from "./components/hero";
import Navbar from './components/navbar';
import ServicesPage from "./components/service/services";
import TestimonialPage from "./components/testimonial";
import Footer from "./components/footer";
import Franchise from "./components/franchise";
import Cube from "/src/assets/cube-dynamic-color.png";
import CustomCursor from "./components/animations/cursor";


const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <> 
    <div className="">
    
    <div className="lg:w-[95%] mx-auto">
    <motion.div className="fixed inset-0 h-2 bg-sky-700 origin-[0%]" style={{ scaleX }} />
    <motion.img id="spinning-element" src={Cube} alt="Cube" className="fixed w-1/2 opacity-50 -z-10 top-1/4 left-1/4 drop-shadow-2xl" />
    <CustomCursor />
      <Navbar />
      <Hero />
      <ServicesPage />
      <CoursePage />
      <Contact />
      <TestimonialPage />
      <AboutPage />
      <Franchise />
      <Footer />
      
    </div>
    
    
    </div>
    </>
  )
}

export default App
