export const handleScrollToSection = (sectionRef) => {
  window.scrollTo({
    top: sectionRef.current.offsetTop,
    behavior: "smooth",
  });
};
