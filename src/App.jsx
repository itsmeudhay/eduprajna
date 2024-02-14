import { motion, useScroll, useSpring } from "framer-motion";
import AboutPage from "./components/about";
import Contact from "./components/contact/contact";
import CoursePage from "./components/courses/course";
import Hero from "./components/hero";
import Navbar from './components/navbar';
import ServicesPage from "./components/service/services";
import TestimonialPage from "./components/testimonial";
import AnimatedCursor from "react-animated-cursor"
import Footer from "./components/footer";
import Franchise from "./components/franchise";
import Cube from "/src/assets/cube-dynamic-color.png";


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
    <motion.img id="spinning-element" src={Cube} alt="Cube" className="w-1/2 opacity-50 -z-10 top-1/4 left-1/4  drop-shadow-2xl fixed" />
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='2,132,199'
      outerAlpha={0.2}
      innerScale={3}
      outerScale={30}
      clickables={[
        'a',
        'p',
        'h1',
        'img',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
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
