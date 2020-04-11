import React, { useState } from "react";

function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const[count, setCount] = useState(0);

   const handleCountChange = ((e) => setCount(parseInt(e.target.value)));
 
  return (
    
    <div>
      <p>The counter is at : {count} </p>
        <input
            type="number"
            value={count}
            onChange={handleCountChange}
            />
      <div>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      </div>
    </div>
  );
}


export default Counter;
