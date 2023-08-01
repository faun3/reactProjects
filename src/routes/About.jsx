import Navbar from "../Navbar";
import SectionIntro from "../SectionIntro";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.2 }}
      className="min-h-[100vh]"
    >
      <Navbar></Navbar>
      <SectionIntro text={`All about me`}></SectionIntro>
    </motion.div>
  );
};
export default About;
