import React, { useRef, useEffect } from "react";
import useBeforeLeave from "./useBeforeLeave";



const App = () => {
  const begForLife = () => console.log("pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
