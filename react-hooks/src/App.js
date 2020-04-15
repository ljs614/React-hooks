import React, { useState } from "react";
import useInput from "./useInput";



const App = () => {
    const [item, setItem ] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    const maxLen = (value) => value.length < 10;
    
    const name = useInput("Mr.", maxLen);

    return (
      <>
        <div>
          <h1>Hello {item}</h1>
          <button onClick={incrementItem}>Increse</button>
          <button onClick={decrementItem}>Decrese</button>
        </div>
        <div>
          <h1>useInput</h1>
          <input placeholder="Name" {...name} />
        </div>
      </>
    );
}

export default App;
