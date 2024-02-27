import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  // State to keep track of cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // State to handle cursor hovering on interactive elements
  const [hovered, setHovered] = useState(false);

  // Event listener for mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Optionally, you can listen for hover events on interactive elements
  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    document.querySelectorAll('a, button').forEach((elem) => {
      elem.addEventListener('mouseenter', handleMouseEnter);
      elem.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('a, button').forEach((elem) => {
        elem.removeEventListener('mouseenter', handleMouseEnter);
        elem.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Animation variants for Framer Motion
  const cursorVariants = {
    default: {
      x: position.x - 10, // 10 is half the size of the cursor element
      y: position.y - 10,
      scale: 1,
      opacity: 1
    },
    hovered: {
      scale: 2,
      x: position.x - 20, // Adjust size if it changes on hover
      y: position.y - 20,
      backgroundColor: '#ffffff',
      opacity: 0.5
    }
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate={hovered ? 'hovered' : 'default'}
      className='-z-50 fixed w-12 h-12 rounded-[50%] bg-gradient-to-r from-slate-500 to-slate-800 mix-blend-difference pointer-events-none'
    />
  );
};

export default CustomCursor;