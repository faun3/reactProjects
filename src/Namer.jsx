import galaxy from "./assets/galaxy.svg";
import ProjectCard from "./ProjectCard";
import img1 from "./assets/proj1imgTEMP.jpg";

const Namer = () => {
  return (
    <>
      <section className="w-full relative">
        <h1 className="text-6xl text-center font-bold z-[2] text-slate-900 py-[12rem] relative">
          Hi, I'm [name]. <br />I make web apps and art.
        </h1>
        <img
          alt=""
          src={galaxy}
          srcset=""
          className="absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%] z-[1] fill-slate-300 stroke-slate-500 opacity-20 w-[150%] h-[100%] "
        />
      </section>
      <div className="my-5 mx-10">
        <p className="text-center text-3xl font-bold w-[60%] mx-auto text-slate-700">
          I am passionate about working on web apps that are a joy to use and to
          look at.
        </p>
      </div>
      <div className="my-10">
        <p className="text-3xl font-bold mt-20 text-center text-emerald-800">
          A sneak peek of what I've worked on:
        </p>
        <div className="flex flex-row gap-10 items-center justify-center my-10 mx-10">
          <ProjectCard />
          <ProjectCard big={true} img={img1} copy={`This image is stolen!`} />
        </div>
      </div>
    </>
  );
};
export default Namer;
