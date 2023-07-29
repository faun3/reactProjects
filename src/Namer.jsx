import galaxy from "./assets/galaxy.svg";

const Namer = () => {
  return (
    <div className="w-full relative">
      <h1 className="my-12 mx-10 text-5xl text-center font-bold z-[2] text-cyan-400 py-[12rem] relative">
        Hello. This is xyz
      </h1>
      <img
        alt=""
        src={galaxy}
        srcset=""
        className="absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%] z-[1] fill-slate-300 stroke-slate-500 opacity-40 w-[150%] h-[100%] "
      />
    </div>
  );
};
export default Namer;
