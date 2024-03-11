import React, {useState} from 'react';

export default function App () {

  const [displayMessage, setDisplayMessage] = useState(""); 


  return (
      <>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          {displayMessage}
        </div>
        <button onClick={()=>{
          setDisplayMessage("Dispensing coffee")
        }}>Coffee</button>
        <button onClick={()=>{
          setDisplayMessage("Dispensing tea")
        }}>Tea</button>
        <button onClick={()=>{
          setDisplayMessage("Dispensing orange juice")
        }}>Orange Juice</button>
      </>
    );
  
}