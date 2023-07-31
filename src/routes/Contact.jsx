import Navbar from "../Navbar";
import SectionIntro from "../SectionIntro";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-slate-400 to-slate-200">
      <Navbar />
      <SectionIntro text={`Let's get in touch`}></SectionIntro>
    </div>
  );
};
export default Contact;
