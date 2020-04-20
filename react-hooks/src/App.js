import React, { useRef, useEffect } from "react";
import useFadeIn from "./useFadeIn";



const App = () => {
  const fadeInH1 = useFadeIn(1,2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div>
      <h1 {...fadeInH1}>Hello!</h1>
      <p {...fadeInP}>lorem ipsum lalalalalala</p>
    </div>
  );
}

export default App;
