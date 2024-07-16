import { useEffect, useState } from "react";

const Experiences = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    setisVisible(true);
    console.log(isVisible);
  }, []);

  return (
    <>
      <div
        className={`flex mx-20 my-12 transition duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col">
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-bold text-5xl px-6 py-2">
            Experiences
          </div>
          <div className="w-[25em] h-1 mt-4 mx-1 rounded-lg bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6]"></div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
