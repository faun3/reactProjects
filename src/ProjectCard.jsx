const ProjectCard = ({ big, img, copy }) => {
  return (
    <div
      className={`bg-emerald-500 rounded-lg h-[30rem] w-[15rem] ${
        big ? "basis-2/3" : "basis-1/2"
      } relative overflow-hidden`}
    >
      <p className="text-white text-2xl font-bold text-center mt-10">{copy}</p>
      <div className="rounded-xl overflow-hidden absolute bottom-[10%] w-[80%] left-[50%] translate-x-[-50%]">
        <img src={img} alt="" srcset="" />
      </div>
    </div>
  );
};
export default ProjectCard;
