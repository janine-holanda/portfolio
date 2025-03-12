import { ASSETS } from "../../constants/assets";
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
            <NavItem
              img={ASSETS.icons.greenShell}
              text="HOME"
              textColor={"text-m-green"}
            />
          </li>
          <li onClick={() => handleScrollToSection(myWorldRef)}>
            <NavItem
              img={ASSETS.icons.boo}
              text="MY WORLD"
              textColor={"text-m-blue"}
            />
          </li>
          <li onClick={() => handleScrollToSection(skillsRef)}>
            <NavItem
              img={ASSETS.icons.fireFlower}
              text="SKILLS"
              textColor={"text-m-red"}
            />
          </li>
          <li onClick={() => handleScrollToSection(projectsRef)}>
            <NavItem
              img={ASSETS.icons.star}
              text="PROJECTS"
              textColor={"text-m-yellow"}
            />
          </li>
          <li onClick={() => handleScrollToSection(contactMeRef)}>
            <NavItem
              img={ASSETS.icons.blueLuma}
              text="Contact Me"
              textColor={"text-m-navy"}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
