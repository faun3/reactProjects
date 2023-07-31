import Navbar from "../Navbar";
import SectionIntro from "../SectionIntro";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-slate-400 to-slate-200">
      <Navbar></Navbar>
      <SectionIntro text={`All about me`}></SectionIntro>
    </div>
  );
};
export default About;
