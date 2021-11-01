import { useEffect, useRef, useState } from 'react'
import Count from './Count.js';
import Button from './Button.js';

function Counter() {

  const [count, setCount] = useState(0);

  const incrementByOneRef = useRef();
  const incrementByTwoRef = useRef();
  const decrementByOneRef = useRef();
  const decrementByTwoRef = useRef();

  const counterButtons = {
    incrementByOne: {
      text: 'Add 1',
      step: 1,
      countHandler: setCount,
      ref: incrementByOneRef
    },
    incrementByTwo: {
      text: 'Add 2',
      step: 2,
      countHandler: setCount,
      ref: incrementByTwoRef
    },
    decrementByOne: {
      text: 'Minus 1',
      step: -1,
      countHandler: setCount,
      ref: decrementByOneRef
    },
    decrementByTwo: {
      text: 'Minus 2',
      step: -2,
      countHandler: setCount,
      ref: decrementByTwoRef
    }
  };

  function checkButton(btn) {
    count + btn.step > 10 || count + btn.step < 0 
    ? btn.ref.current.disabled = true 
    : btn.ref.current.disabled = false;
  }

  useEffect(() => {
    Object.keys(counterButtons).forEach(button => {
      checkButton(counterButtons[button]);
    });
  }, [count])

  return (
    <div>
      <br></br>
      <Button ref={incrementByOneRef} btn={counterButtons.incrementByOne} /><span> </span>
      <Button ref={incrementByTwoRef} btn={counterButtons.incrementByTwo} /><span> </span>
      <Count count={count} />
      <Button ref={decrementByOneRef} btn={counterButtons.decrementByOne} /><span> </span>
      <Button ref={decrementByTwoRef} btn={counterButtons.decrementByTwo} /><span> </span>
    </div>
  );
}

export default Counter;