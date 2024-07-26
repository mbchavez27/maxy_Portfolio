import { useEffect, useState } from "react";

//Pictures
import jumpShotLogo from "../assets/jumpshotLogo.png";

const Projects = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    setisVisible(true);
  }, []);

  const ProjectList = [
    {
      name: "Jump Shot Tournament",
      bgPicture: jumpShotLogo,
      description:
        "An API that enables users to access the data of each classes in DLSU",
      link: "https://epyxx-27.itch.io/jump-shot-tournament",
    },
    {
      name: "Jump Shot Tournament",
      bgPicture: jumpShotLogo,
      description:
        "An API that enables users to access the data of each classes in DLSU",
      link: "https://epyxx-27.itch.io/jump-shot-tournament",
    },
  ];

  return (
    <>
      <div
        className={`mx-20 my-12 transition duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col">
          <div className="font-PlayFair bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-bold text-5xl px-6 py-2">
            Projects
          </div>
          <div className="w-[20em] h-1 mt-4 mx-1 rounded-lg bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6]"></div>
          <div className="font-Raleway my-6">
            {ProjectList.map((project) => {
              return (
                <>
                  <div className="bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent text-2xl px-6 py-4 hover:font-bold">
                    {project.name}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
