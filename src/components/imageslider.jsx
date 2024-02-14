import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Slides } from "./data";

function ImageSlider() {
 const [currentSlide, setCurrentSlide] = useState(0);
 const [autoPlay, setAutoPlay] = useState(true);

 const handleAutoPlay = () => setAutoPlay(!autoPlay);

 useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % Slides.length);
      }, 3000); // Adjust interval here

      return () => clearInterval(interval);
    }
 }, [autoPlay, currentSlide]);

 const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + Slides.length) % Slides.length);
 };

 const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % Slides.length);
 };

 // Framer Motion animation configuration
 const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
 };

 return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      {Slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          animate={currentSlide === index ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      ))}
      <div className="absolute bottom-0 left-0 flex w-full justify-between items-center p-4 bg-black bg-opacity-50">
        <button
          onClick={handlePrevSlide}
          className="flex items-center px-2 py-1 rounded-md text-white hover:bg-gray-700"
        >
          <img src="/src/assets/icons/left-arrow.png" className="h-4 w-4" />
          Previous
        </button>
        <div className="flex flex-wrap gap-2">
          {Slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`${
                currentSlide === index ? "bg-white" : "bg-gray-700"
              } w-2 h-2 rounded-full`}
            />
          ))}
        </div>
        <button
          onClick={handleNextSlide}
          className="flex items-center px-2 py-1 rounded-md text-white hover:bg-gray-700"
        >
          Next
          <img src="/src/assets/icons/right-arrow.png" className="h-4 w-4" />
        </button>
      </div>
      <button
        onClick={handleAutoPlay}
        className={`absolute top-0 right-0 mt-2 mr-2 p-2 hidden rounded-full ${
          autoPlay ? "bg-green-500" : "bg-gray-700"
        }`}
      >
        {autoPlay ? "Pause" : "Play"}
      </button>
    </div>
 );
}

export default ImageSlider;