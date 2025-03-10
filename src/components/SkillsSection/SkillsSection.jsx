import skills from "../../data/skills.json";

export default function SkillsSection({ skillsRef }) {
  return (
    <section ref={skillsRef} className="section bg-skills-pattern">
      <div className="container h-full">
        <h1 className="text-m-red">Skills</h1>
        <div className="grid auto-rows-min justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-28">
          {skills.map((item) => {
            if (item.category !== "Next Adventures") {
              return (
                <div key={item.id}>
                  <h2 className=" text-m-red">{item.category}</h2>
                  <div className="flex justify-center flex-wrap gap-4 sm:flex-col">
                    {item.technologies.map((skill) => (
                      <img
                        key={skill.id}
                        className="object-contain max-w-full h-6 opacity-90 hover:motion-scale-in-110 hover:motion-paused hover:motion-opacity-in-100"
                        src={skill.src}
                        alt={skill.name}
                      />
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={item.id} className="lg:col-span-3 lg:self-top">
                  <h2 className=" text-m-red">{item.category}</h2>
                  <div className="flex justify-center flex-wrap gap-4 sm:flex-col lg:flex-row">
                    {item.technologies.map((skill) => (
                      <img
                        key={skill.id}
                        className="object-contain max-w-full h-6 opacity-90 hover:motion-scale-in-110 hover:motion-paused hover:motion-opacity-in-100"
                        src={skill.src}
                        alt={skill.name}
                      />
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
