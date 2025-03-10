import education_icon from "../../assets/icons/education_icon.png";
import question_icon from "../../assets/icons/question_icon.png";
import brainstation_icon from "../../assets/icons/brainstation_logo_icon.png";
import seneca_icon from "../../assets/icons/seneca_logo_icon.png";
import ifce_icon from "../../assets/icons/ifce_logo_icon.png";
import key_icon from "../../assets/icons/key_icon.png";
import door_lock_icon from "../../assets/icons/door_lock_icon.png";
import bullet_icon from "../../assets/icons/bullet_icon.png";
import mushroom_up_icon from "../../assets/icons/mushroom_up_icon.png";
import { useState } from "react";

export default function MyWorldSection({ myWorldRef }) {
  const [showBulletAnimation, setShowBulletAnimation] = useState("");
  const [showMushroomUpAnimation, setShowMushroomUpAnimation] = useState("");
  const [showDoorKeyAnimation, setShowDoorKeyAnimation] = useState({
    door: "",
    key: "",
  });
  return (
    <section ref={myWorldRef} className="section bg-my-world-pattern">
      <div className="container h-full">
        <h1 className="text-m-blue motion-preset-slide-left-lg motion-duration-2000 motion-delay-500 motion-ease-bounce">
          My World
        </h1>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 lg:gap-x-8 lg:gap-y-14">
          <h2 className="text-m-blue lg:col-span-2 lg:mb-0">
            Professional Quests
          </h2>
          <div className="flex flex-col items-center mb-8 lg:mb-0">
            <img
              className="object-contain max-w-full h-28"
              src={education_icon}
              alt="Education Icon"
            />
            <h3 className=" text-m-blue">Education</h3>
            <div>
              <article className="flex gap-4 mb-4">
                <img
                  className="object-contain max-w-full h-auto animate-spinY"
                  src={brainstation_icon}
                  alt="BrainStation Logo"
                />
                <div>
                  <p className="text-sm font-semibold">BrainStation</p>
                  <p className="text-xs text-slate-700">Toronto (2024)</p>
                  <p className="text-sm">Diploma: Software Engineering</p>
                </div>
              </article>
              <article className="flex gap-4 mb-4">
                <img
                  className="object-contain max-w-full h-auto animate-spinY"
                  src={seneca_icon}
                  alt="Seneca Logo"
                />

                <div>
                  <p className="text-sm font-semibold">Seneca</p>
                  <p className="text-xs text-slate-700">
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
                  className="object-contain max-w-full h-auto animate-spinY"
                  src={ifce_icon}
                  alt="BrainStation Logo"
                />
                <div>
                  <p className="text-sm font-semibold">
                    Instituto Federal de Educação,
                    <br /> Ciência e Tecnologia do Ceará
                  </p>
                  <p className="text-xs text-slate-700">Brazil</p>
                  <p className="text-sm">
                    Bachelor&apos; Degree: Mechatronic
                    <br /> Engineering
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="flex flex-col items-center mb-8 lg:mb-0">
            <img
              className="object-contain max-w-full h-20 mb-4 lg:mt-3 hover:motion-preset-bounce hover:cursor-pointer"
              src={question_icon}
              alt="Question Icon"
            />
            <h3 className="  text-m-blue">Why Software Engineering?</h3>
            <p className="text-sm mb-4 max-w-2xl lg:text-base text-justify hyphens-auto">
              I decided to transition my career to this fascinating world
              because I worked as a System Analyst at Ihm Stefanini for 5 years,
              where I built applications to monitor and control manufacturing
              processes. The part I loved the most was building user interfaces
              for operators and engineers (Human-Machine Interface and
              Supervisory Control and Data Aquicsition System). I realized my
              passion is using technology to solve real-world problems and
              enhance user experience.
            </p>
            <b className="text-sm text-center max-w-xl lg:text-base">
              “I have completed 17 projects, including Software Development Life
              Cycle, migrations, and software maintenance.”
            </b>
          </div>
          <div className="flex justify-center items-end flex-wrap gap-8 lg:col-span-2 lg:justify-around w-3/4">
            <article
              className="flex flex-col items-center hover:motion-scale-in-110 hover:cursor-pointer hover:motion-paused "
              onMouseEnter={(e) => {
                setShowDoorKeyAnimation({
                  door: "motion-scale-out-[3.0] motion-delay-500/opacity motion-opacity-out-25",
                  key: "-motion-translate-x-in-25 motion-duration-1000 motion-paused",
                });
              }}
              onMouseLeave={(e) => {
                setShowDoorKeyAnimation({
                  door: "",
                  key: "",
                });
              }}
            >
              <div className="flex items-center mb-3">
                <img
                  className={`object-contain max-w-full h-6 ${showDoorKeyAnimation.door}`}
                  src={door_lock_icon}
                  alt=""
                />
                <img
                  className={`object-contain max-w-full h-10 ${showDoorKeyAnimation.key}`}
                  src={key_icon}
                  alt=""
                />
              </div>
              <b className="text-sm text-m-blue text-center lg:text-base">
                Creative to find
                <br />
                solutions
              </b>
            </article>
            <article
              className="flex flex-col items-center hover:motion-scale-in-110 hover:cursor-pointer hover:motion-paused"
              onMouseEnter={(e) => {
                setShowBulletAnimation(
                  "-motion-translate-x-out-100 motion-delay-500/opacity motion-opacity-out-25"
                );
              }}
              onMouseLeave={(e) => {
                setShowBulletAnimation("");
              }}
            >
              <div className="flex items-center mb-1">
                <img
                  className={`object-contain max-w-full w-14 ${showBulletAnimation}`}
                  src={bullet_icon}
                  alt=""
                />
              </div>
              <b className="text-sm text-m-blue text-center lg:text-base ">
                Resilient and adaptable
                <br />
                to achieve the goals
              </b>
            </article>
            <article
              className="flex flex-col items-center hover:motion-scale-in-110 hover:cursor-pointer hover:motion-paused"
              onMouseEnter={(e) => {
                setShowMushroomUpAnimation(
                  "-motion-translate-y-out-100 motion-translate-x-out-100 motion-rotate-out-60 motion-duration-500 motion-delay-500/opacity motion-opacity-out-0"
                );
              }}
              onMouseLeave={(e) => {
                setShowMushroomUpAnimation("");
              }}
            >
              <div className="flex flex-col items-center mb-3">
                <span
                  className={`font-mario text-white text-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest text-center ${showMushroomUpAnimation}`}
                >
                  1-up
                </span>
                <img
                  className="object-contain max-w-full w-12"
                  src={mushroom_up_icon}
                  alt=""
                />
              </div>
              <b className="text-sm text-m-blue text-center lg:text-base">
                Curious to leveup
                <br />
                my knowledge
              </b>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
