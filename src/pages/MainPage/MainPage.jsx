import img from "../../assets/img/banner.png";

import { useRef } from "react";
import NavBar from "../../components/NavBar/NavBar";

export default function MainPage() {
  const homeRef = useRef(null);
  const myWorldRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const hireMeRef = useRef(null);

  return (
    <>
      <NavBar
        homeRef={homeRef}
        myWorldRef={myWorldRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        hireMeRef={hireMeRef}
      />

      <div ref={homeRef} className="bg-m-green bg-opacity-20">
        <h1 className="font-mario text-m-green text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Home
        </h1>
        <img className="w-full" src={img} alt="Landscape" />
      </div>

      <div ref={myWorldRef} className="flex h-lvh bg-m-blue bg-opacity-10">
        <h1 className="font-mario text-m-blue text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          My World
        </h1>
      </div>
      <div ref={skillsRef} className="flex h-lvh bg-m-red bg-opacity-10">
        <h1 className="font-mario text-m-red text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Skills
        </h1>
      </div>
      <div ref={projectsRef} className="flex h-lvh bg-m-yellow bg-opacity-10">
        <h1 className="font-mario text-m-yellow text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Projects
        </h1>
      </div>
      <div ref={hireMeRef} className="flex h-lvh bg-m-blue-navy bg-opacity-10">
        <h1 className=" font-mario text-m-blue-navy text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Hire Me
        </h1>
      </div>
    </>
  );
}
