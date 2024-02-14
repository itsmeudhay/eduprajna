import ServiceCard from "./serviceCard";
import ParallaxText from "../animations/motion";
import { motion } from "framer-motion";
import { serviceCardsData } from "../data";
import sphere from "/src/assets/icons/motion/sphere-dynamic-clay.png";




function ServicesPage() {
  return (
    <>
      <div className="container py-16 mx-auto px-4">
        <header className="py-8 -z-20 rounded-3xl bg-none">
          <h1 className="text-4xl text-sky-600 font-bold text-center">Services and Solutions</h1>
        </header>

        <main className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCardsData.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </main>
      </div>
      <section className="py-[20vh]">
        <img id="floating-object" src={sphere} className="w-[50%] -z-10 mb-0 mx-auto flex justify-start items-start animate-spin" />
        <ParallaxText baseVelocity={-2}>
          <motion.h1
            className="rounded-xl w-full"
            whileHover={{ scale: 100 }}
            transition={{ type: "spring", stiffness: 500, damping: 100 }}
          >Experience matters. Learn from industry experts at Eduprajna🤓</motion.h1></ParallaxText>
      </section>
      <a href="https://eduprajnatuition.netlify.app/">
        <div className="flex justify-center items-center p-20 bg-gradient-to-r from-white via-sky-300 to-blue-900 my-20 rounded-3xl">
          <h1 className="text-white text-6xl hover:text-gray-800">Eduprajna Tuition</h1>
        </div>
      </a>
    </>
  );
}

export default ServicesPage;
