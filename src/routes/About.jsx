import Navbar from "../Navbar";
import SectionIntro from "../SectionIntro";

const About = () => {
  return (
    <div className="min-h-[100vh]">
      <Navbar></Navbar>
      <SectionIntro text={`All about me`}></SectionIntro>
    </div>
  );
};
export default About;
