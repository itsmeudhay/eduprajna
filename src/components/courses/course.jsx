import { useRef } from "react";
import ParallaxText from "../animations/motion";
import { Card, ListCard } from "./cards";
import { listCards, PopularCourse } from "../data";
import { motion } from "framer-motion";
import Hash from "/src/assets/icons/motion/hash-dynamic-premium.png";




function CoursePage() {
  const ref = useRef(null);
  return (
    <>
      <div id="course">
        <section ref={ref} className="py-16 px-4 lg:px-20 bg-none">
          <h2 className=" text-4xl text-sky-600 py-32 font-bold text-center">Our Popular Courses</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {PopularCourse.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} icon={card.icon} />
            ))}
          </div>
          

          <h2 className=" text-4xl text-sky-600 font-bold mt-16 py-16 text-center">Our Courses</h2>
          <div className="flex flex-col justify-center items-center gap-y-4">
            {listCards.map((card, index) => (
              <ListCard
                key={index}
                image={card.image}
                title={card.title}
                descriptionList={card.descriptionList}
              />
            ))}
          </div>
        </section>

        <section className="py-[40vh]">
          <img id="animated-element" src={Hash} className="w-[50%] -z-10 mb-0 mx-auto flex justify-start items-start animate-ping" />
          <ParallaxText baseVelocity={-2}>
            <motion.h1
              whileHover={{ scale: 100 }}
              transition={{ type: "spring", stiffness: 5000, damping: 100 }}
            >Many more Courses are there, Visit Eduprajna.</motion.h1></ParallaxText>
        </section>

      </div>
    </>
  );
}

export default CoursePage;
