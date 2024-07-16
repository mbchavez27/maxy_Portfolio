import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import NavBar from "./components/navbar";

const App = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    setisVisible(true);
    console.log(isVisible);
  }, []);

  return (
    <>
      <Router>
        <div className="font-Monsterrat bg-gradient-to-r from-[#A81818] to-[#6A1A1A] h-screen">
          <div className="h-screen bg-noisePattern absolute inset-0">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
            </Routes>
          </div>
          <NavBar></NavBar>
        </div>
      </Router>
    </>
  );
};

export default App;
