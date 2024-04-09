import React from 'react';

function App() {

  const pop = () => {
    alert("pop goes the weasel!")
  }

  return (
    <React.Fragment>
    <button onClick={pop}>Press me</button>
    </React.Fragment>
  );
}

// keeping the code alive

export default App;


