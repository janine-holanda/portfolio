export default function SkillsSection({ skillsRef }) {
  return (
    <section
      ref={skillsRef}
      className="section min-h-lvh bg-skills-pattern bg-contain bg-repeat"
    >
      <div className="container flex flex-col justify-center items-center h-full">
        <h1 className="font-mario text-m-red text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Skills
        </h1>
      </div>
    </section>
  );
}
