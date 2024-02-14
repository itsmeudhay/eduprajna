import ParallaxText from "../animations/motion";
import { motion } from "framer-motion";
import AddressCard from './addressCard';
import SocialIcons from './socialicon';
import Telephone from "/src/assets/images/telephone.jpg";
import Cloud from "/src/assets/icons/motion/Cloud.png";


function Contact() {

  return (
    <>
      <div id="contact">
      <div className="container mx-auto px-4 pb-16">
        <header className="py-8 rounded-3xl bg-none">
          <h1  className="text-4xl font-bold text-sky-600 text-center">Contact Us</h1>
        </header>

        <main  className="py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
          <img src={Telephone} alt="Contact Image" className="w-full rounded-xl mb-8" />
            <AddressCard />
          </div>
          <div className="flex items-center justify-center">
            <SocialIcons />
          </div>
        </main>
      </div>

      </div>
      <section className="">
      <motion.img id="floating-object" src={Cloud} className="w-[50%] drop-shadow-xl my-0 mx-auto flex justify-start items-start"/>
        <ParallaxText baseVelocity={-2}><motion.h1
        whileHover={{ scale: 100 }}
        transition={{ type: "spring", stiffness: 500, damping: 100 }}
        >Master the art of coding - Python, Java, web development - it&#8217;s all at Eduprajna😎</motion.h1></ParallaxText>
      </section>
      
    </>
  );
}

export default Contact;