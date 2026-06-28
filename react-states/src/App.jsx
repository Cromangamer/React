import './App.css'
import Ticket from './components/ticket'
import From from './components/From'
import Post from './components/post'
import ObjectGame from './components/object_game'

function generateTicketNumbers(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 1000))
}

function App() {
  let size = Math.floor(Math.random() * 100)
  const ticketArray = generateTicketNumbers(size)

  return (
    <>
      <From />
      <Post />
      <ObjectGame />
      <Ticket array={ticketArray}/>
    </>
  )
}

export default App
