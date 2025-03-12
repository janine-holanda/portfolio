import { useState, useEffect } from "react";
import { ASSETS } from "../../constants/assets";

export default function Card({ project }) {
  const [showDetails, setShowDetails] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  const openZoomedImage = (imageUrl) => {
    setZoomedImage(imageUrl);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (zoomedImage) {
        setZoomedImage(null);
      }
    };

    if (zoomedImage) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [zoomedImage]);

  return (
    <article
      key={project.id}
      className={`h-[22rem] w-[18rem] rounded-lg p-[3px] shadow-2xl relative transition-all duration-1000 ${
        showDetails
          ? "bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] hover:bg-[linear-gradient(60deg,_rgb(111,_186,_130),_rgb(7,_179,_155),_rgb(16,_152,_173),_rgb(80,_115,_184),_rgb(161,_102,_171),_rgb(239,_78,_123),_rgb(243,_112,_85),_rgb(247,_149,_51))]"
          : "hover:bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]"
      } `}
    >
      <div
        className={`rounded-lg w-full h-full p-4 bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-xl ${
          showDetails ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-medium text-white">{project.name}</h5>
          <img
            src={ASSETS.icons.star}
            alt=""
            className="h-8 w-10 cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          />
        </div>
        <ul className="list-disc pl-4 text-sm">
          {project.technologies.map((technologie, i) => {
            return <li key={i}>{technologie}</li>;
          })}
        </ul>
      </div>
      <div
        className={`rounded-lg bg-gradient-to-bl from-m-blue via-blue-300 to-blue-500 w-full h-full ${
          showDetails ? "hidden" : "block"
        }`}
      >
        <img
          src={ASSETS.icons.star}
          alt=""
          className="object-fill w-16 h-14 absolute top-[33%] right-6 animate-[bounce_1s_infinite] cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        />
        <div className="h-[40%]">
          <img
            src={project.image_path}
            alt=""
            className="object-fill w-full h-full rounded-t-lg cursor-zoom-in"
            onClick={() => openZoomedImage(project.image_path)}
          />
        </div>
        {zoomedImage && (
          <div
            className="object-contain cursor-zoom-out fixed top-0 left-0 w-full h-full p-4 bg-black flex justify-center items-center z-50 overflow-y-scroll"
            onClick={closeZoomedImage}
          >
            <img
              src={zoomedImage}
              alt="zoomed-image"
              className="max-w-[90vw] max-h-[90vh]"
            />
          </div>
        )}
        <div className="h-[50%] px-2 py-2">
          <h5 className="text-xl font-medium mb-2 text-black">
            {project.name}
          </h5>
          <p className="text-sm">{project.description}</p>
        </div>
        <div className="h-[10%] px-2 text-center">
          <a
            href={project.repository_url}
            target="_blank"
            className="text-sm text-black pb-1 font-semibold hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-m-yellow before:absolute before:left-0 before:bottom-0 "
          >
            VIEW SOURCE CODE
          </a>
        </div>
      </div>
    </article>
  );
}
