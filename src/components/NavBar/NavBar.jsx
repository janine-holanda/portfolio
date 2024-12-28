import fireFlowerImg from "../../assets/icons/fire_flower_icon.png";
import starImg from "../../assets/icons/star_icon.png";
import questionMarkImg from "../../assets/icons/question_icon.png";
import greenShellImg from "../../assets/icons/green_shell_icon.png";
import redLumaImg from "../../assets/icons/boo_icon.png";
import NavItem from "../NavItem/NavItem";
import { handleScrollToSection } from "../../utils";

export default function NavBar({
  homeRef,
  myWorldRef,
  skillsRef,
  projectsRef,
  hireMeRef,
}) {
  return (
    <nav className="fixed w-full p-2 z-50 bg-m-blue-sky h-[4rem]">
      <ul className="grid grid-cols-5 h-full items-center">
        <li onClick={() => handleScrollToSection(homeRef)}>
          <NavItem img={greenShellImg} text="HOME" textColor={"m-green"} />
        </li>
        <li onClick={() => handleScrollToSection(myWorldRef)}>
          <NavItem img={redLumaImg} text="MY WORLD" textColor={"m-blue"} />
        </li>
        <li onClick={() => handleScrollToSection(skillsRef)}>
          <NavItem img={fireFlowerImg} text="SKILLS" textColor={"m-red"} />
        </li>
        <li onClick={() => handleScrollToSection(projectsRef)}>
          <NavItem img={starImg} text="PROJECTS" textColor={"m-yellow"} />
        </li>
        <li onClick={() => handleScrollToSection(hireMeRef)}>
          <NavItem
            img={questionMarkImg}
            text="HIRE ME"
            textColor={"m-blue-navy"}
          />
        </li>
      </ul>
    </nav>
  );
}
