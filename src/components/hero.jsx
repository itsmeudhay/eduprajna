import ImageSlider from "./imageslider";
import logo from "/src/assets/icons/edu.png";
import { motion } from "framer-motion";
import { transition, fadeIn } from './data';

const Hero = () => {
    return (
        <>
            <div id="home" className="flex flex-wrap w-full">
                <div className="flex flex-col w-full md:w-1/2">
                <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <img src={logo} alt="logo" className="flex items-center justify-center my-8 w-72 mr-2 full " />
                        <h1 className="text-6xl text-sky-600  leading-relaxed text-start">
                            Education Opens Up The Mind
                        </h1>
                        <div className="pt-12 pb-12 text-2xl font-light  text-start">
                            <h4>At Eduprajna learn tomorrow technologies today from industry experts. Empowering students with knowledge and skills for the future.</h4>
                        </div>
                    </motion.div>
                </div>
                <div className="w-1/2">
                    <div className="hidden object-cover w-[90%] h-screen md:block"><ImageSlider /></div>
                </div>
            </div>
        </>
    )
}

export default Hero;
