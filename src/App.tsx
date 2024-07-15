function App() {
  return (
    <>
      <div className="font-Monsterrat bg-gradient-to-r from-[#A81818] to-[#6A1A1A] h-screen">
        <div className="h-screen bg-noisePattern absolute inset-0">
          <div className="flex flex-col h-screen justify-between">
            <div className="flex flex-col h-screen justify-center">
              <div className="mx-24 h-64">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-bold text-8xl">
                  Max Chavez
                </div>
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-medium text-2xl mt-8">
                  Computer Science Student - Front End Developer <br />-
                  Aspiring Startup Founder
                </div>
              </div>
            </div>
            <div className="flex justify-end mx-24 mb-12">
              <div className="flex justify-around">
                <div className="flex bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-medium text-2xl mx-12">
                  About Me
                </div>
                <div className="flex bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-medium text-2xl mx-12">
                  Projects
                </div>
                <div className="flex bg-gradient-to-r from-[#FFFFFF] to-[#A9A6A6] bg-clip-text text-transparent font-medium text-2xl mx-12">
                  Experiences
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
