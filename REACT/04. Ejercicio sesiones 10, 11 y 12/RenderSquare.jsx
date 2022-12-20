import React, { useState, useRef } from 'react';




const RenderSquare = () => {


    const [color, setColor] = useState('#000000');

    const [manageInterval, setManageInterval] = useState(0);
    
    const initialStyle = {
        width: '255px',
        height: '255px',
        backgroundColor: color
    }

    const randomColor = () => Math.floor(Math.random() * 256);

    const getHex = (red, green, blue) => {
        return (
          '#' +
          [red, green, blue]
            .map((c) => {
              const hex = c.toString(16);
              return hex.lenght === 1 ? '0' + hex : hex;
            })
            .join('')
        );
      };

      const generateHex = () => {
        const rgb = {
          r: randomColor(),
          g: randomColor(),
          b: randomColor(),
        };
        return setColor(getHex(rgb.r, rgb.g, rgb.b));
      };

    
    const changeColorFunction = () => {
        return setManageInterval(setInterval(generateHex,500))
    }


    const onStopChangeColor = () =>{
        return clearInterval(manageInterval)
    }

    const onClickChangeColor = () => {
        return clearInterval(manageInterval);
      };

    return (
        <div 
        onMouseOver={changeColorFunction} 
        onMouseLeave={onStopChangeColor}
        onDoubleClick={onClickChangeColor}
        style={initialStyle}>

        </div>
    );
}

export default RenderSquare;
