import { useState } from "react";
import githubCat from "./assets/github-mark-white.svg";

const ProjectCard = ({ big, img, copy }) => {
  const [showDetes, setShowDetes] = useState(false);

  function toggleDetes() {
    setShowDetes(true);
  }

  function hideDetes() {
    setShowDetes(false);
  }

  return (
    <div
      className={`bg-emerald-500 rounded-lg h-[30rem] w-[15rem] ${
        big ? "basis-2/3" : "basis-1/2"
      } relative overflow-hidden sm:basis-full`}
      onMouseEnter={toggleDetes}
      onMouseLeave={hideDetes}
    >
      <p className="text-white text-2xl font-bold text-center mt-10">{copy}</p>
      <div className="rounded-xl overflow-hidden absolute bottom-[10%] w-[80%] left-[50%] translate-x-[-50%]">
        <img src={img} alt="" srcset="" />
      </div>
      <div
        className={`absolute w-full h-full top-0 left-0 ${
          showDetes ? "opacity-1" : "opacity-0"
        } bg-emerald-950 flex flex-col justify-center items-center gap-10 transition-opacity`}
      >
        <div className="flex gap-5 align-baseline justify-center items-center">
          <img src={githubCat} alt="" className="w-[50%] h-[50%]" />
          <a
            href=""
            className="text-emerald-200 font-bold text-center text-4xl"
          >
            Github
          </a>
        </div>
        <div>
          <a
            href=""
            className="text-emerald-200 font-bold text-center my-10 text-4xl"
          >
            Try Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
