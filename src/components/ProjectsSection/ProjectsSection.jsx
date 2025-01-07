export default function ProjectsSection({ projectsRef }) {
  return (
    <section
      ref={projectsRef}
      className="section min-h-lvh bg-projects-pattern bg-contain bg-repeat"
    >
      <div className="container flex flex-col justify-center items-center h-full">
        <h1 className="font-mario text-m-yellow text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Projects
        </h1>
      </div>
    </section>
  );
}
