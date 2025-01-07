import education_icon from "../../assets/icons/education_icon.png";
import question_icon from "../../assets/icons/question_icon.png";
import brainstation_icon from "../../assets/icons/brainstation_logo_icon.png";
import seneca_icon from "../../assets/icons/seneca_logo_icon.png";
import ifce_icon from "../../assets/icons/ifce_logo_icon.png";
import key_icon from "../../assets/icons/key_icon.png";
import door_lock_icon from "../../assets/icons/door_lock_icon.png";
import bullet_icon from "../../assets/icons/bullet_icon.png";
import mushroom_up_icon from "../../assets/icons/mushroom_up_icon.png";

export default function MyWorldSection({ myWorldRef }) {
  return (
    <section
      ref={myWorldRef}
      className="section min-h-lvh bg-my-world-pattern bg-contain bg-repeat"
    >
      <div className="container h-full">
        <h1 className="my-8 font-mario text-m-blue text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest text-center sm:pt-8 sm:mt-0 sm:text-4xl">
          My World
        </h1>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2">
          <h2 className="text-xl font-semibold text-m-blue mb-4 lg:col-span-2">
            Professional Quests
          </h2>
          <div className="flex flex-col items-center mb-8">
            <img
              className="object-contain max-w-full h-28"
              src={education_icon}
              alt="Education Icon"
            />
            <h2 className="text-l font-semibold text-m-blue mb-4">Education</h2>
            <div>
              <article className="flex gap-4 mb-4">
                <img
                  className="object-contain max-w-full h-auto"
                  src={brainstation_icon}
                  alt="BrainStation Logo"
                />
                <div>
                  <p className="text-sm font-semibold">BrainStation</p>
                  <p className="text-xs text-slate-400">Toronto (2024)</p>
                  <p className="text-sm">Diploma: Software Engineering</p>
                </div>
              </article>
              <article className="flex gap-4 mb-4">
                <img
                  className="object-contain max-w-full h-auto"
                  src={seneca_icon}
                  alt="BrainStation Logo"
                />
                <div>
                  <p className="text-sm font-semibold">Seneca</p>
                  <p className="text-xs text-slate-400">
                    Toronto (2020 - 2023)
                  </p>
                  <p className="text-sm">
                    Advanced Diploma: Purchasing
                    <br /> and Supply Management
                  </p>
                </div>
              </article>
              <article className="flex gap-4">
                <img
                  className="object-contain max-w-full h-auto"
                  src={ifce_icon}
                  alt="BrainStation Logo"
                />
                <div>
                  <p className="text-sm font-semibold">
                    Instituto Federal de Educação,
                    <br /> Ciência e Tecnologia do Ceará
                  </p>
                  <p className="text-xs text-slate-400">Brazil</p>
                  <p className="text-sm">
                    Bachelor&apos; Degree: Mechatronic
                    <br /> Engineering
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="flex flex-col items-center mb-8">
            <img
              className="object-contain max-w-full h-20 mb-4"
              src={question_icon}
              alt="Question Icon"
            />
            <h2 className="text-l font-semibold text-m-blue mb-4">
              Why Software Engineering?
            </h2>
            <p className="text-sm mb-4 max-w-2xl">
              I decided to transition my career to this fascinating world
              because I worked as a System Analyst at Ihm Stefanini for 5 years,
              where I built applications to monitor and control manufacturing
              processes. The part I loved the most was building user interfaces
              for operators and engineers (Human-Machine Interface and
              Supervisory Control and Data Aquicsition System). I realized my
              passion is using technology to solve real-world problems and
              enhance user experience.
            </p>
            <p className="text-sm font-semibold text-center max-w-xl">
              “I have completed 17 projects, including Software Development Life
              Cycle, migrations, and software maintenance.”
            </p>
          </div>
          <div className="flex justify-center items-end flex-wrap gap-8 lg:col-span-2">
            <article className="flex flex-col items-center">
              <div className="flex items-center mb-3">
                <img
                  className="object-contain max-w-full h-6"
                  src={door_lock_icon}
                  alt=""
                />
                <img
                  className="object-contain max-w-full h-10"
                  src={key_icon}
                  alt=""
                />
              </div>
              <p className="text-sm font-semibold text-m-blue text-center">
                Creative to find
                <br />
                solutions
              </p>
            </article>
            <article className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <img
                  className="object-contain max-w-full w-14"
                  src={bullet_icon}
                  alt=""
                />
              </div>
              <p className="text-sm font-semibold text-m-blue text-center">
                Resilient and adaptable
                <br />
                to achieve the goals
              </p>
            </article>
            <article className="flex flex-col items-center">
              <div className="flex flex-col items-center mb-3">
                <h1 className="font-mario text-white text-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest text-center">
                  1-up
                </h1>
                <img
                  className="object-contain max-w-full w-12"
                  src={mushroom_up_icon}
                  alt=""
                />
              </div>
              <p className="text-sm font-semibold text-m-blue text-center">
                Curious to leveup
                <br />
                my knowledge
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
