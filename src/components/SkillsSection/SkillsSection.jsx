import skills from "../../data/skills.json";

export default function SkillsSection({ skillsRef }) {
  return (
    <section ref={skillsRef} className="section bg-skills-pattern">
      <div className="container min-h-screen">
        <h1 className="text-m-red">Skills</h1>
        <div className="min-h-screen grid auto-rows-min justify-items-center content-between justify-evenly gap-8 sm:grid-cols-2 sm:h-[85%] overflow-hidden">
          {skills.map((item) => {
            return (
              <div key={item.id}>
                <h2 className=" text-m-red">{item.category}</h2>
                <div className="py-4 flex justify-center flex-wrap gap-4 sm:flex-col sm:items-center">
                  {item.technologies.map((skill) => (
                    <div
                      key={skill.id}
                      className="relative w-fit group cursor-pointer hover:motion-scale-in-110 hover:motion-paused"
                    >
                      <div className="absolute -inset-[0.15rem] bg-gradient-to-r from-red-600 to-m-red rounded-md blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                      <img
                        className="relative object-contain max-w-full h-6 space-x-6"
                        src={skill.src}
                        alt={skill.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
