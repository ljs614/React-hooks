import React, { useState } from "react";
const App = () => {
    const [item, setItem ] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
      <div>
        <h1>Hello {item}</h1>
        <button onClick={incrementItem}>Increse</button>
        <button onClick={decrementItem}>Decrese</button>
      </div>
    );
}

export default App;
