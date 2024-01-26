import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  //Below userName, url, post are props(properties) of Card component
  //Components are used to modularize the codes into smaller objects. Then we can loop through Cards or apply some operation to Cards.
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">Vite with Tailwind</h1>
      <Card userName="Ritwik" url="https://images.pexels.com/photos/19949053/pexels-photo-19949053/free-photo-of-a-man-walking-in-the-shadow-of-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      <Card post="Software Engineer"/>
    </>
  )
}

export default App
