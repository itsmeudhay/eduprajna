import PropTypes from 'prop-types';
import { transition, fadeIn } from '../data';
import { motion } from "framer-motion";

function ServiceCard({ name, role, imageSrc, quote }) {
  return (
    <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
      <div className="bg-white rounded-3xl shadow-2xl p-16" >
        <div className="block mb-4">
          <img src={imageSrc} alt={name} className="w-32 h-32 mb-8 mx-auto drop-shadow-2xl" />
          <div>
            <h3 className="text-xl text-center text-sky-600 font-bold">{name}</h3>
            <p className="text-black text-center">{role}</p>
          </div>
        </div>
        <p className="mb-4 text-center text-gray-600 text-lg ">{quote}</p>
      </div>
    </motion.div>
  );
}

ServiceCard.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  imageSrc: PropTypes.any,
  quote: PropTypes.string
}

export default ServiceCard;