import React, {useState} from 'react'

function ColoredBox() {

    const [color, setColor] = useState();
    const redButtonClick = () => {
        setColor(1); 
    }
    const blueButtonClick = () => {
        setColor(2); 
    }
    const greenButtonClick = () => {
        setColor(3); 
    }

    const getColor = () => {
        if (color === 1) {
            return 'red';
        }
        if (color === 2) {
            return 'blue';
        }
        if (color === 3) {
            return 'green';
        }
    }

    return <React.Fragment>
        <div style={{
            border:'1px black solid',
            width:'50px',
            height:'50px',
            backgroundColor: getColor()
        }}>
        </div>
        <div>

        </div>

        <button onClick={redButtonClick}>Red</button>
        <button onClick={greenButtonClick}>Green</button>
        <button onClick={blueButtonClick}>Blue</button>
    </React.Fragment>
  
}

export default ColoredBox;