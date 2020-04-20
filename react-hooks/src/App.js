import React, { useRef, useEffect } from "react";
import useNetwork from "./useNetwork";



const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online? "We just went online" : "We are offline");
  }
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
}

export default App;
