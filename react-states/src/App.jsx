import { useState } from 'react'
import './App.css'
import From from './components/From'
import Post from './components/post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <From /> */}      
      <Post />
      <br/>
      <Post />
      <br/>
      <Post />
      <br/>
      <Post />
    </>
  )
}

export default App
