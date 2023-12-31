import ProjectCard from "./ProjectCard";
import img1 from "./assets/proj1imgTEMP.jpg";
import SectionIntro from "./SectionIntro";

const Namer = () => {
  return (
    <>
      <SectionIntro text={`Hi I'm [name]. I make websites and art.`} />
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
        <div className="flex flex-col gap-10 items-center md:flex-row flex-wrap justify-center mt-10 px-10 pb-10 min-w-full">
          <ProjectCard
            copy={`portfolio`}
            img={img1}
            color={"emerald"}
            githubLink={"https://github.com/faun3/reactProjects"}
            hostedAt={"https://goinggoinggone.netlify.app"}
          />
          <ProjectCard
            copy={`redux and express app`}
            img={img1}
            color={"pink"}
            big={true}
          />
          <ProjectCard
            copy={`fullstack next app (mongo, auth)`}
            img={img1}
            color={"cyan"}
            full={true}
          />
        </div>
      </div>
    </>
  );
};
export default Namer;
