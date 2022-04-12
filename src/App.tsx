import React from 'react';
import {AnimatedLink} from "./Component";

function App() {
  return (
    <div>
      <AnimatedLink className={"text-5xl"} to="/" hoverColor={"bg-black"} hoverTextColor={"text-white"}>Home</AnimatedLink>
      <AnimatedLink className={"text-5xl mt-5"} to="/" hoverColor={"bg-black"} hoverTextColor={"text-white"}>Panda</AnimatedLink>
    </div>
  );
}

export default App;
