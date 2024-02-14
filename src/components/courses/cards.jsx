import { motion } from "framer-motion";
import { transition, fadeIn } from '../data';
import PropTypes from 'prop-types';

export const Card = ({ title, description, icon, size = "w-48 h-48" }) => (
  <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
    <div className="flex flex-col rounded-lg shadow-2xl py-8 px-6 bg-white text-center">
      <div className="flex justify-center align-items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <img src={icon} alt={title} className={`${size}`} />
        </motion.div>
      </div>
      <h3 className="mt-4 text-2xl text-sky-600 font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
    </motion.div>
);

export const ListCard = ({ image, title, descriptionList }) => {
  return (
    <motion.div
    variants={fadeIn("up")}
    transition={transition()}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    className="flex items-center justify-center xl:justify-start gap-6"
  >
      <div className="grid  rounded-3xl overflow-hidden shadow-2xl shadow-gray-500 bg-white">
       <img className="object-fill justify-center items-center rounded-3xl shadow-lg flex" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-sky-600 text-2xl my-2">{title}</div>
          <ul className="list-disc leading-relaxed text-gray-900 font-bold uppercase p-6">
            {descriptionList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      </motion.div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  size:PropTypes.number
}

ListCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  descriptionList: PropTypes.array
}