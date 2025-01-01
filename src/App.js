import "./App.css";
import Moveavableicon from "./components/utils/moveavableicon";
import WelcomeScreen from "./components/utils/WelcomeScreen";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="h-screen  w-screen">
      <div className="h-full  flex items-center flex-col space-y-5 ">
        <h1>CURSOR TRACK COMPONENT</h1>
        <div className="flex space-x-5">
          
          <Moveavableicon className="bg-cyan-300">hi</Moveavableicon>
          <Moveavableicon>bye</Moveavableicon>
          <Moveavableicon className="bg-cyan-300"><img src="./logo192.png"></img></Moveavableicon>
        </div>
      </div>
    </div>
  );
}

export default App;
