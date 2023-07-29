const ProjectCard = ({ big }) => {
  return (
    <div
      className={`bg-emerald-500 rounded-lg h-[20rem] w-[15rem] ${
        big ? "basis-2/3" : "basis-1/2"
      }`}
    >
      <p>Copy text here</p>
    </div>
  );
};
export default ProjectCard;
