import ParallaxText from "./animations/motion";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from 'prop-types';
import ChatBubble from "/src/assets/icons/motion/chat-bubble-dynamic-color.png";
import Play from "/src/assets/icons/motion/play-dynamic-premium.png";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [distance, -distance]);
}


function TestimonialPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);
    return (
      <>
      <div ref={ref} className="container mx-auto px-4 py-16">

      <motion.img style={{ y }} src={ChatBubble} className="w-[30%] p-0 my-0 drop-shadow-2xl mr-6 mx-auto flex justify-center"/>

        <header className="py-8 bg-none">
          <p className="text-lg font-bold text-slate-600 text-center">Why Choose Us</p>
          <h1 className="text-4xl font-bold text-sky-600 text-center">Trusted By Hundreds  Of Students</h1>
        </header>

        

        <main className="py-12">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <TestimonialCard
              name="Anjali"
              role="Software Engineer"
              quote="Eduprajna transformed me from a complete beginner to a confident IT professional. Their instructors are incredibly patient and supportive, and the courses are designed to make learning easy and fun. I'm so glad I chose them!"
            />
            <TestimonialCard
              name="Rohan"
              role="Web Developer"
              quote="I was hesitant to start a career in IT, but Eduprajna's personalized approach helped me overcome my doubts and unleash my potential. They helped me identify my strengths, choose the right courses, and build a strong portfolio. I'm now working at my dream company, all thanks to them!"
            />
            <TestimonialCard
              name="Priya"
              role="Project Manager"
              quote="As a working professional, I needed a flexible and effective way to upskill. Eduprajna's online classes and weekend batches were perfect for me. They helped me balance my work and studies, and I'm now leading successful IT projects. I highly recommend them to anyone looking to advance their career!"
            />
            <TestimonialCard
              name="Prabhu"
              role="Devops Developer"
              quote="Good training. Nominal fee. Good faculty, well located. Loved the training. They spend quality time. Thank you so much for your support. Highly recommended to all. Has good grip on the concept."
            />
            {/* Add more testimonials here */}
          </div>
          <motion.img style={{ y }} src={ChatBubble} className="w-[30%] ml-6 drop-shadow-2xl mx-auto flex justify-center"/>
        </main>
      </div>
      <section className="pb-[40vh]">
      <motion.img id="floating-object" src={Play} className="w-[50%] my-0 mx-auto flex justify-start items-start"/>
      <ParallaxText baseVelocity={-2}><motion.h1
        whileHover={{ scale: 100 }}
        transition={{ type: "spring", stiffness: 500, damping: 100 }}
        >Learn by doing, not just watching. Hands-on IT training at Eduprajna🫡</motion.h1></ParallaxText>
    </section>
      </>
    );
  }

  function TestimonialCard({ name, role, quote }) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center mb-4">
          <div>
            <h3 className="text-2xl font-bold text-sky-600">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <p className="mb-4 font-medium text-gray-800">{quote}</p>
      </div>
    );
  }

  TestimonialCard.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    quote: PropTypes.string
  }
  
  export default TestimonialPage;