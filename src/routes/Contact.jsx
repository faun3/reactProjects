import Navbar from "../Navbar";
import SectionIntro from "../SectionIntro";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.2 }}
      className="min-h-[100vh]"
    >
      <Navbar />
      <SectionIntro text={`Let's get in touch`}></SectionIntro>
    </motion.div>
  );
};
export default Contact;
