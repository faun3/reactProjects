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
      <div className="my-5 mx-10">
        <p className="text-center text-3xl font-bold w-[60%] mx-auto text-slate-700">
          I like working on pretty looking web apps and listening to music. My
          favorite color is black (and if you say it's not a color then you're
          mean).
        </p>
      </div>
      <div className="mt-[6rem]">
        <p className="text-center text-3xl font-bold w-[60%] mx-auto text-slate-700">
          Here are a few favorites:
        </p>
      </div>
      <div className="flex flex-col justify-center my-6 items-center gap-6">
        <iframe
          src="https://open.spotify.com/embed/track/4mZofk9oND0AA4sJfzTH0R?utm_source=generator"
          width="95%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="md:w-[60%] mx-10"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/track/1WhIXXx1mFS8GGPWtr4hTB?utm_source=generator"
          width="95%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="md:w-[60%] mx-10"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/track/75xJvGP16xh4Jw5CnFtCyy?utm_source=generator"
          width="95%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="md:w-[60%] mx-10"
        ></iframe>
      </div>
    </motion.div>
  );
};
export default About;
