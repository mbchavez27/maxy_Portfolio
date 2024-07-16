import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import Experiences from "./components/experiences";

const App = () => {
  return (
    <>
      <Router>
        <div className="font-Monsterrat bg-gradient-to-r from-[#A81818] to-[#6A1A1A] h-screen">
          <div className="h-screen bg-noisePattern absolute inset-0">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/Projects" element={<Projects></Projects>}></Route>
              <Route
                path="/Experiences"
                element={<Experiences></Experiences>}
              ></Route>
            </Routes>
          </div>
          <NavBar></NavBar>
        </div>
      </Router>
    </>
  );
};

export default App;
