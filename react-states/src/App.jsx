import { useState } from 'react'
import './App.css'
import From from './components/From'
import Post from './components/post'
import ObjectGame from './components/object_game'
import Ticket from './components/ticket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ticket array={[0,1,2,3,4,5,6,7,8,9,10]}/>
    </>
  )
}

export default App
