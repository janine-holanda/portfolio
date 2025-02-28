import githubIcon from "../../assets/icons/github_icon.png";
import linkedinIcon from "../../assets/icons/linkedin_icon.png";
import gmailIcon from "../../assets/icons/gmail_icon.png";

import Footer from "../Footer/Footer";
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";
import ContactMeForm from "../ContactMeForm/ContactMeForm";

export default function ContactMeSection({ contactMeRef }) {
  return (
    <section ref={contactMeRef} className="section bg-black">
      <div className="container flex flex-col justify-center h-full">
        <h1 className="text-m-light-blue">Contact Me</h1>
        <h2 className="mb-12 text-m-light-blue font-bold md:text-2xl md:mb-14">
          Let&apos;s go on in a coding adventure together!
        </h2>
        <div className="flex flex-col gap-8 lg:flex-row">
          <ContactMeForm />
          <div className="flex flex-col gap-4 lg:w-1/3">
            <LinkWithIcon
              href={"janine.holanda@gmail.com"}
              icon={gmailIcon}
              isClickable={false}
            />
            <LinkWithIcon
              href={"http://www.github.com/janine-holanda"}
              icon={githubIcon}
              isClickable={true}
            />
            <LinkWithIcon
              href={"http://www.linkedin.com/in/janineholanda"}
              icon={linkedinIcon}
              isClickable={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
