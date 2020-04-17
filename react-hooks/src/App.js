import React, { useRef, useEffect } from "react";
import useClick from "./useClick";



const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
