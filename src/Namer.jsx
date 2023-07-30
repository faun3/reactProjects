import ProjectCard from "./ProjectCard";
import img1 from "./assets/proj1imgTEMP.jpg";
import SectionIntro from "./SectionIntro";

const Namer = () => {
  return (
    <>
      <SectionIntro />
      <div className="my-5 mx-10">
        <p className="text-center text-3xl font-bold w-[60%] mx-auto text-slate-700">
          I am passionate about working on web apps that are a joy to use and to
          look at.
        </p>
      </div>
      <div className="my-10">
        <p className="text-3xl font-bold mt-20 text-center text-slate-800">
          A sneak peek of what I've worked on:
        </p>
        <div className="flex md:flex-row flex-col gap-10 items-center flex-wrap md:flex-nowrap justify-center my-10 px-10 ll">
          <ProjectCard copy={`sorry nothing`} img={img1} color={"emerald"} />
          <ProjectCard copy={`sorry nothing`} img={img1} color={"pink"} />
          <ProjectCard copy={`sorry nothing`} img={img1} color={"cyan"} />
        </div>
      </div>
    </>
  );
};
export default Namer;
