import logo from "../../assets/logo/SUPER-Janine-World-2024-12-30.png";

export default function HomeSection({ homeRef }) {
  return (
    <section
      ref={homeRef}
      className="section bg-banner bg-cover max-w-full h-lvh"
    >
      <div className="container flex flex-col justify-center items-center h-full">
        <img className="max-w-full md:w-[40rem] mb-4" src={logo} alt="logo" />
        <h2 className="mb-8 font-mario text-center text-m-blue text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] tracking-widest md:text-2xl">
          {" "}
          I'm a full-stack web developer
          <br /> with a love for all things tech
        </h2>
        <p className="max-w-xl text-pretty p-4 rounded-xl bg-white/5 shadow-lg ring-1 ring-black/5 backdrop-blur-md md:text-xl">
          I'm always ready to tackle new challenges, power up my skills, and
          embark on exciting adventures in the realm of coding. With a creative
          mind and a keen eye for ideas, I find joy in discovering ways to make
          people's lives easier and more efficient through technology.
        </p>
      </div>
    </section>
  );
}
