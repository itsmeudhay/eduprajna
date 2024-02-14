import { motion } from "framer-motion";
import { transition, reveal } from '../data';
import PropTypes from 'prop-types';

const Reveal = ({ children }) => {
  return (
    <div className="relative">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={transition()}
      >
        {children}
      </motion.div>
      <motion.div
        variants={reveal()}
        initial="hidden"
        transition={{ duration: 0.75, ease: "easeIn" }}
        whileInView="visible"
        viewport={{ once: false }}
        className="absolute inset-0 bg-secondary z-10"
      ></motion.div>
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.any,
}

export default Reveal;
