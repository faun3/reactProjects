import Navbar from "../Navbar";
import SectionIntro from "../SectionIntro";
import { motion } from "framer-motion";
import githubLogo from "../assets/github-mark.svg";
import linkedInLogo from "../assets/linkedin-svgrepo-com.svg";

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
      <div className="flex flex-row mx-[10%] my-[10%] items-center justify-center gap-10">
        <a href="https://github.com/faun3">
          <img src={githubLogo} alt="" />
        </a>
        <a href="https://github.com/faun3">
          <img
            src={linkedInLogo}
            alt=""
            className="max-w-[100px] max-h-[100px]"
          />
        </a>
      </div>
    </motion.div>
  );
};
export default Contact;
