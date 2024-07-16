import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    setisVisible(true);
    console.log(isVisible);
  }, []);
  return (
    <>
      <div className="flex flex-col h-screen">
        <div
          className={`flex flex-col h-screen justify-center transform transition duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mx-24 h-72">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-bold text-8xl">
              Max Chavez
            </div>
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-medium text-2xl mt-8">
              Computer Science Student - Front End Developer <br />- Aspiring
              Startup Founder
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
