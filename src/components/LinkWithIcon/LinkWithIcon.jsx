export default function LinkWithIcon({ href, icon, isClickable }) {
  return (
    <a
      href={href}
      className={`text-sm text-white flex flex-row justify-start items-center gap-4 hyphens-auto text-wrap ${
        isClickable
          ? "hover:underline hover:text-m-light-blue cursor-pointer pointer-events-auto"
          : "cursor-text pointer-events-none"
      }`}
      target="_blank"
    >
      <img
        src={icon}
        alt={href}
        className="w-6 p-[2px] bg-white rounded-full"
      />
      {href}
    </a>
  );
}
