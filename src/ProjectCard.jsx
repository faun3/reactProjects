import { useState } from "react";
import githubCat from "./assets/github-mark-white.svg";
import linkIcon from "./assets/link-alt-1-svgrepo-com.svg";

const ProjectCard = ({ big, img, copy, color, full, hostedAt, githubLink }) => {
  const [showDetes, setShowDetes] = useState(false);

  function toggleDetes() {
    setShowDetes(true);
  }

  function hideDetes() {
    setShowDetes(false);
  }

  const colors = {
    emerald: {
      bg: "bg-emerald-500",
      detes: "bg-emerald-950",
      text: "text-emerald-200",
    },
    cyan: {
      bg: "bg-cyan-500",
      detes: "bg-cyan-950",
      text: "text-cyan-200",
    },
    pink: {
      bg: "bg-pink-500",
      detes: "bg-pink-950",
      text: "text-pink-200",
    },
  };

  return (
    <div
      className={`${colors[color].bg} rounded-lg ${
        big
          ? "md:basis-[calc((100%-5rem)*6/10)]"
          : "md:basis-[calc((100%)*4/10)]"
      } relative overflow-hidden min-h-[20rem] ${
        full ? "min-w-[100%] grow" : ""
      } basis-full w-full`}
      onMouseEnter={toggleDetes}
      onMouseLeave={hideDetes}
    >
      <p className="text-white text-2xl font-bold text-center my-10">{copy}</p>
      <div className="rounded-xl overflow-hidden absolute bottom-[0rem] w-[70%] h-[50%] left-[50%] translate-x-[-50%]">
        <img src={img} alt="" srcset="" className="w-full h-full" />
      </div>
      <div
        className={`absolute w-full h-full top-0 left-0 ${
          showDetes ? "opacity-1" : "opacity-0"
        } ${
          colors[color].detes
        } flex flex-col justify-center items-between transition-opacity`}
      >
        <div className="flex gap-5 align-baseline justify-center items-center">
          <img src={githubCat} alt="" className="w-[50px] h-[50px]" />
          <a
            href={githubLink}
            className={`${colors[color].text} font-bold text-center text-4xl`}
          >
            Github
          </a>
        </div>
        <div className="flex gap-2 align-baseline justify-center items-center mt-[2rem]">
          <img
            src={linkIcon}
            alt=""
            className="max-w-[50px] max-h-[50px] text-white filter invert"
          />
          <a
            href={hostedAt}
            className={`${colors[color].text} font-bold text-center text-4xl`}
          >
            Try Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
