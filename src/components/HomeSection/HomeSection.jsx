import logo from "../../assets/logo/super-janine-world-logo.png";

export default function HomeSection({ homeRef }) {
  return (
    <section
      ref={homeRef}
      className="section bg-banner bg-cover max-w-full flex justify-center items-center bg-no-repeat animate-banner [animation-play-state:paused] hover:[animation-play-state:running]"
    >
      <div className="container flex flex-col justify-center items-center h-full">
        <img
          className="max-w-full md:w-[40rem] mb-8 md:mb-10 motion-preset-slide-left-lg motion-duration-2000 motion-delay-500 motion-ease-bounce"
          src={logo}
          alt="logo"
        />
        <h2 className="mb-12 font-mario text-m-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] tracking-widest md:text-2xl md:mb-14 motion-preset-typewriter-[50] motion-duration-[10s] text-sm">
          {" "}
          I&apos;m a full-stack web developer
          <br /> with a love for all things tech
        </h2>
        <p className="max-w-xl text-justify hyphens-auto p-4 rounded-xl bg-white/5 shadow-lg ring-1 ring-black/5 backdrop-blur-md md:text-xl hover:bg-white/25">
          I&apos;m always ready to tackle new challenges, power up my skills,
          and embark on exciting adventures in the realm of coding. With a
          creative mind and a keen eye for ideas, I find joy in discovering ways
          to make people&apos;s lives easier and more efficient through
          technology.
        </p>
      </div>
    </section>
  );
}
