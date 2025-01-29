import { useRef } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HomeSection from "../../components/HomeSection/HomeSection";
import MyWorldSection from "../../components/MyWorldSection/MyWorldSection";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactMeSection from "../../components/ContactMeSection/ContactMeSection";

export default function MainPage() {
  const homeRef = useRef(null);
  const myWorldRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <>
      <NavBar
        homeRef={homeRef}
        myWorldRef={myWorldRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactMeRef={contactMeRef}
      />

      <main>
        <HomeSection homeRef={homeRef} />
        <MyWorldSection myWorldRef={myWorldRef} />
        <SkillsSection skillsRef={skillsRef} />
        <ProjectsSection projectsRef={projectsRef} />
        <ContactMeSection contactMeRef={contactMeRef} />
      </main>
    </>
  );
}
