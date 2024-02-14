import { Link } from "react-scroll";
import Reveal from "./animations/reveal";
import logo from "/src/assets/icons/edu.png";

function Footer() {
  return (
    <footer id="glassy-effect" className="shadow-sky-700 shadow-inner lg:rounded-full lg:w-full sm:w-auto mx-auto my-32 py-16">
      <div className="container mx-auto lg:flex items-center justify-evenly">
        <div className="flex items-center z-10">
          <Reveal>
          <img src={logo} alt="Eduprajna Logo" className="lg:w-64 w-32 mx-auto" />
          </Reveal>
        </div>
        <div className="flex items-center">
        <p className="text-black hover:text-white text-sm font-medium">&copy; {new Date().getFullYear()} Eduprajna. All rights reserved.</p>
        </div>
        <ul className="lg:flex items-center lg:space-x-12">
          <li>
          <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={5000} to="contact" className="hover:animate-pulse shadow-white text-black hover:text-white">Contact Us</Link>
          </li>
          <li>
          <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={5000} to="course" className="hover:animate-pulse shadow-white text-black hover:text-white">Careers</Link>
          </li>
          <li>
          <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={5000} to="franchise" className="hover:animate-pulse shadow-white text-black hover:text-white">Franchise</Link>
          </li>
          <li>
          <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={4000} to="home" className="hover:animate-pulse shadow-white text-black hover:text-white">Back to Top</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
