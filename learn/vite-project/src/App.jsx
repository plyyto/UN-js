import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





export default function MyApp() {

  return (
    <div className='main'>
      <h1>Counter</h1>
      <MyButton />
    </div>
  )
}



function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetCounter() {
    setCount(count == 0);
  }

  return (
    <>
    <button className='but' onClick={handleClick}>
      count is {count}
    </button>
    <button className='but' onClick={resetCounter}>
      reset
    </button>
    </>
  );
}

