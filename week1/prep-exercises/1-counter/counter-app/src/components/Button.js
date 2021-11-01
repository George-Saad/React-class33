import './Button.css';
import React, { useRef } from "react";

function Button({ btn }, ref) {
  
  function changeCount() {
    btn.countHandler(prevCount => {
      return prevCount + btn.step;
    });
  }

  return (
    <button className="Button" ref ={ref} onClick={changeCount}>{btn.text}</button>
  )
}  

const btnRef = React.forwardRef(Button)

export default btnRef;