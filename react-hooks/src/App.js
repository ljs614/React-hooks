import React, { useRef, useEffect } from "react";
import usePreventLeave from "./usePreventLeave";



const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protext</button>
      <button onClick={disablePrevent}>Unprotext</button>
    </div>
  );
}

export default App;
