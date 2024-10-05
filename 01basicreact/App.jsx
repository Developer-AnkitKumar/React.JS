import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter+1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1); 
    }
  }

  const isEvenOdd = () => {
    return counter % 2 === 0 ? 'even' : 'odd'
  }
  

  return (
    <>
    <h1>Hello! I am Counter</h1>
    <h2>counter value : {counter} ({isEvenOdd()})</h2>

    <button onClick={addValue}>
      AddValue: {counter}
    </button>
    <br />
    <button onClick={removeValue} >
      removeValue: {counter}
    </button>
    <p>footer: {counter} ({isEvenOdd()})</p>
    </>
  )
}

export default App
