import { useState } from 'react'
import './App.css'
import From from './components/From'
import Post from './components/post'
import ObjectGame from './components/object_game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <From />      
      <Post />
      <br/>
      <Post />
      <br/>
      <Post />
      <br/>
      <Post /> */}

      <ObjectGame />
    </>
  )
}

export default App
