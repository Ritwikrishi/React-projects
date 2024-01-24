import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let counter = 15;

  // const addValue = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }
  // Due to batching these four statements get converted into single setCount(count+1).
  // To avoid this we can use callbacks.

  const addValue = () => {
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
  }

  const removeValue = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value</button> {"    "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
