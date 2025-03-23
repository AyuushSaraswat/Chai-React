import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <button onClick={()=>setCount(count+1)} disabled={count >= 10}>+</button>
       <br />
       <h1>Counter {count}</h1>
       <br />
       <button onClick={()=>setCount(count-1)} disabled={count <= 0}>-</button>
    </>
  )
}

export default App
