import React, { useRef, useEffect } from "react";
import useNotification from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi", {body:"I love kimchi"});
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}

export default App;
