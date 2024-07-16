import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    setisVisible(true);
    console.log(isVisible);
  }, []);

  return (
    <>
      <div
        className={`flex h-screen flex-col justify-end items-end px-24 py-8 transform transition duration-500  ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-around items-center">
          <Link
            to="/"
            className="flex bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-medium text-2xl mx-14
                transition duration-500 transform hover:-translate-y-2"
          >
            Home
          </Link>
          <Link
            to="Projects"
            className="flex bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-medium text-2xl mx-14
                transition duration-500 transform hover:-translate-y-2"
          >
            Projects
          </Link>
          <Link
            to="Experiences"
            className="flex bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-medium text-2xl mx-14
                transition duration-500 transform hover:-translate-y-2"
          >
            Experiences
          </Link>
        </div>
        <div>
          <div className="w-[40em] h-1 mt-4 mx-1 rounded-lg bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6]"></div>
          <div className="w-[35em] h-1 mt-2 mx-1 rounded-lg bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6]"></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
