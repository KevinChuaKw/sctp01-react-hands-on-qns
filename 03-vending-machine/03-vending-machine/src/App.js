import React, {useState} from 'react';

export default function App () {

  const [displayMessage, setDisplayMessage] = useState(""); 
  

  return (
      <>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          {displayMessage}
        </div>
        <button onClick={}>Coffee</button>
        <button onClick={}>Tea</button>
        <button onClick={}>Orange Juice</button>
      </>
    );
  
}