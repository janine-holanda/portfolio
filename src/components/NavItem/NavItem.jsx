import { useState } from "react";

export default function NavItem({ img, text, textColor }) {
  const [showText, setShowText] = useState("hidden");

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onMouseEnter={(e) => {
        setShowText("block");
      }}
      onMouseLeave={(e) => {
        setShowText("hidden");
      }}
    >
      <div className="mb-1 border-4 rounded-lg border-m-light-blue w-10 h-8 ring-2 ring-black">
        <div className="ring-2 ring-black rounded-md border-black h-full bg-transparent p-[2px]">
          <img
            className="w-full h-full hover:animate-spinY "
            src={img}
            alt="image"
          />
        </div>
      </div>
      <h4
        className={`${showText} font-mario text-${textColor} text-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide animate-fadeIn`}
      >
        {text}
      </h4>
    </div>
  );
}
