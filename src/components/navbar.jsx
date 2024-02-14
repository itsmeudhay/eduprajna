import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Home from "/src/assets/icons/Navbar/3d-house.png";
import Course from "/src/assets/icons/Navbar/light-bulb.png";
import Contact from "/src/assets/icons/Navbar/3d-accept.png";
import About from "/src/assets/icons/Navbar/speech-bubble.png";

const Navbar = () => {
  return (
    <nav id='glassy-effect' className="fixed bottom-0 sm:bottom-12 w-fit left-1/2 -translate-x-1/2 bg-accent
    rounded-t-xl sm:rounded-full py-1 px-12 flex items-center justify-around sm:justify-center z-30">
      

      <ul className="flex lg:gap-16 gap-8  items-center">
      <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            ><li className="nav-item">
        <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={4000} to="home" className="nav-link px-2 py-1 text-black hover:text-sky-50"><img className='w-12' src={Home} alt="Home" /></Link>
        </li></motion.div>
        <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            ><li className="nav-item">
        <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={5000} to="course" className="nav-link px-2 py-1 text-black hover:text-sky-50"><img className='w-12' src={Course} alt="course" /></Link>
        </li></motion.div>
        <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            ><li className="nav-item">
        <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={5000} to="contact" className="nav-link px-2 py-1 text-black hover:text-sky-50"><img className='w-12' src={Contact} alt="Contact" /></Link>
        </li></motion.div>
        <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            ><li className="nav-item">
        <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={5000} to="about" className="nav-link px-2 py-1 text-black hover:text-sky-50"><img className='w-12' src={About} alt="About" /></Link>
        </li></motion.div>   
      </ul>
    </nav>
  );
};

export default Navbar;
