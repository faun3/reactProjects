import { useState } from "react";

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
      } relative overflow-hidden`}
      onMouseEnter={toggleDetes}
      onMouseLeave={hideDetes}
    >
      <p className="text-white text-2xl font-bold text-center mt-10">{copy}</p>
      <div className="rounded-xl overflow-hidden absolute bottom-[10%] w-[80%] left-[50%] translate-x-[-50%]">
        <img src={img} alt="" srcset="" />
      </div>
      <div
        className={`absolute w-full h-full top-0 left-0 ${
          showDetes ? "visible" : "hidden"
        } bg-emerald-950`}
      ></div>
    </div>
  );
};
export default ProjectCard;
