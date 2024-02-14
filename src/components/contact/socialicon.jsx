import { transition, fadeIn } from '../data';
import { motion } from "framer-motion";
import Phone from "/src/assets/icons/contact/phone.png";
import Whatsapp from "/src/assets/icons/contact/whatsapp.png";
import Location from "/src/assets/icons/contact/periscope.png";
import Instagram from "/src/assets/icons/contact/instagram.png";
import Facebook from "/src/assets/icons/contact/facebook.png";


function SocialIcons() {
    return (
      <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="lg:flex items-center justify-center xl:justify-start gap-6 my-16"
          >
        <a href="tel:8197719297" className="hover:text-sky-500 mx-16">
          <img className="w-10 fill-current bg-none drop-shadow-2xl" alt="Call Now" src={Phone} />
        </a>
        <a href="https://wa.me/message/KZMK64YYZU7GN1" className="hover:text-sky-500 mx-16">
          <img className="w-10 fill-current" alt="WhatsApp" src={Whatsapp} />
        </a>
        <a href="https://maps.app.goo.gl/Vu4VPYJGZPkFh8899" className="hover:text-sky-500 mx-16">
          <img className="w-10 fill-current" alt="Location" src={Location} />
        </a>
        <a href="https://www.instagram.com/eduprajna_kammanahalli?igsh=MXhxY3hqMWFtOG9tdQ==" className="hover:text-sky-500 mx-16">
          <img className="w-10 fill-current" alt="Instagram" src={Instagram} />
        </a>
        <a href="https://www.facebook.com/eduprajna/" className="hover:text-sky-500 mx-16">
          <img className="w-10 fill-current" alt="Facebook" src={Facebook} />
        </a>
        
      </motion.div>
    );
  }
  
  export default SocialIcons;