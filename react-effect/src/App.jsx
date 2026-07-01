import { useState } from 'react'
import './App.css'
import First from './components/first'
import Second from './components/second'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <First />
      <Second />
    </>
  )
}

export default App
