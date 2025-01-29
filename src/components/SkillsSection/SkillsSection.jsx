export default function SkillsSection({ skillsRef }) {
  return (
    <section ref={skillsRef} className="section bg-skills-pattern">
      <div className="container h-full">
        <h1 className="text-m-red">Skills</h1>
        <div className="grid auto-rows-min justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-28">
          <div className="">
            <h2 className=" text-m-red">Front-End</h2>
            <div className="flex justify-center flex-wrap gap-4 sm:flex-col">
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white"
                alt="HTML"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white"
                alt="Tailwind CSS"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff"
                alt="CSS"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff"
                alt="SASS"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB"
                alt="React"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white"
                alt="React Router"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000"
                alt="JavaScript"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff"
                alt="Shadcn/ui"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff"
                alt="Vite"
              />
            </div>
          </div>
          <div>
            <h2 className=" text-m-red">Back-End</h2>
            <div className="flex justify-center flex-wrap gap-4 sm:flex-col">
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white"
                alt="Node.js"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB"
                alt="Express.js"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Postman-%23FF6C37?logo=postman&logoColor=white"
                alt="Postman"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Axios-%235A29E4?logo=axios&logoColor=white"
                alt="Axios"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff"
                alt="MySQL"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Knex.js-%23D26B38?logo=knex.js&logoColor=white"
                alt="Knex.js"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/JSON-000?logo=json&logoColor=fff"
                alt="JSON"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff"
                alt="NPM"
              />
            </div>
          </div>
          <div>
            <h2 className=" text-m-red">Tools</h2>
            <div className="flex justify-center flex-wrap gap-4 sm:flex-col">
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"
                alt="GitHub"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff"
                alt="Git"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white"
                alt="VS Code"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=fff"
                alt="Jira"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&logo=Canva&logoColor=white"
                alt="Canva"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white"
                alt="Figma"
              />
            </div>
          </div>
          <div className="lg:col-span-3 lg:self-top">
            <h2 className=" text-m-red">Next Adventures</h2>
            <div className="flex justify-center flex-wrap gap-4 sm:flex-col lg:flex-row">
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff"
                alt="Redux"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff"
                alt="TypeScript"
              />
              <img
                className="object-contain max-w-full h-6"
                src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white"
                alt="MongoDB"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
