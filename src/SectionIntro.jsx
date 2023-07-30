import galaxy from "./assets/galaxy.svg";

const SectionIntro = () => {
  return (
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
  );
};
export default SectionIntro;
