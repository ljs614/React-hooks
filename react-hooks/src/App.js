import React, { useRef, useEffect } from "react";
import useFullscreen from "./useFullscreen";

const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull} = useFullscreen(onFullS);
  return (
    <div>
      <img 
        ref={element}
        src="https://images.unsplash.com/photo-1586521995659-4204fe01d104?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80" 
        style={{width: "800px"}}
        onClick={exitFull}
      />
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
}

export default App;
