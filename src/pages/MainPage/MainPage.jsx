import img from "../../assets/img/bg-section-skills.png";

import { useRef } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HomeSection from "../../components/HomeSection/HomeSection";

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

      <HomeSection homeRef={homeRef} />

      <section
        ref={myWorldRef}
        className="section h-lvh bg-my-world-pattern bg-contain bg-repeat"
      >
        <div className="container">
          <h1 className="font-mario text-m-blue text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
            My World
          </h1>
          <p>
            a (1) : the original words and form of a written or printed work (2)
            : an edited or emended copy of an original work b : a work
            containing such text 2 a : the main body of printed or written
            matter on a page b : the principal part of a book exclusive of front
            and back matter c : the printed score of a musical composition 3 a
            (1) : a verse or passage of Scripture chosen especially for the
            subject of a sermon or for authoritative support (as for a doctrine)
            (2) : a passage from an authoritative source providing an
            introduction or basis (as for a speech) b : a source of information
            or authority 4 : theme, topic 5 a : the words of something (such as
            a poem) set to music b : matter chiefly in the form of words or
            symbols that is treated as data for processing by computerized
            equipment text-editing software 6 : a type suitable for printing
            running text
          </p>
          <p>
            a (1) : the original words and form of a written or printed work (2)
            : an edited or emended copy of an original work b : a work
            containing such text 2 a : the main body of printed or written
            matter on a page b : the principal part of a book exclusive of front
            and back matter c : the printed score of a musical composition 3 a
            (1) : a verse or passage of Scripture chosen especially for the
            subject of a sermon or for authoritative support (as for a doctrine)
            (2) : a passage from an authoritative source providing an
            introduction or basis (as for a speech) b : a source of information
            or authority 4 : theme, topic 5 a : the words of something (such as
            a poem) set to music b : matter chiefly in the form of words or
            symbols that is treated as data for processing by computerized
            equipment text-editing software 6 : a type suitable for printing
            running text
          </p>
        </div>
      </section>
      <div
        ref={skillsRef}
        className="flex h-lvh bg-skills-pattern bg-contain bg-repeat"
      >
        <h1 className="font-mario text-m-red text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Skills
        </h1>
      </div>
      <div
        ref={projectsRef}
        className="flex h-lvh bg-projects-pattern bg-contain bg-repeat"
      >
        <h1 className="font-mario text-m-yellow text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Projects
        </h1>
      </div>
      <div
        ref={hireMeRef}
        className="flex h-lvh bg-footer-pattern bg-contain bg-repeat"
      >
        <h1 className=" font-mario text-m-blue-navy text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Hire Me
        </h1>
      </div>
    </>
  );
}
