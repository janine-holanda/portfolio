export default function ContactMeSection({ contactMeRef }) {
  return (
    <section
      ref={contactMeRef}
      className="section min-h-lvh bg-contact-me-pattern bg-contain bg-repeat"
    >
      <div className="container flex flex-col justify-center items-center h-full">
        <h1 className="font-mario text-white text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-widest">
          Contact Me
        </h1>
      </div>
    </section>
  );
}
