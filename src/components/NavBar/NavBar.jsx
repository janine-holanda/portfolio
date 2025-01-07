import fireFlowerImg from "../../assets/icons/fire_flower_icon.png";
import starImg from "../../assets/icons/star_icon.png";
import blueLumaImg from "../../assets/icons/blue_luma_icon.png";
import greenShellImg from "../../assets/icons/green_shell_icon.png";
import redLumaImg from "../../assets/icons/boo_icon.png";
import NavItem from "../NavItem/NavItem";
import { handleScrollToSection } from "../../utils";

export default function NavBar({
  homeRef,
  myWorldRef,
  skillsRef,
  projectsRef,
  contactMeRef,
}) {
  return (
    <header className="fixed w-full pb-2 pt-4 z-50 backdrop-blur-lg bg-white/5 shadow-md ring-1 ring-black/5 h-fit  sm:h-full sm:w-16 sm:py-0 ">
      <nav className="container sm:h-full">
        <ul className="grid grid-cols-5 h-full items-center sm:grid-cols-1 sm:grid-rows-5">
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
          <li onClick={() => handleScrollToSection(contactMeRef)}>
            <NavItem img={blueLumaImg} text="Contact Me" textColor={"white"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
