import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar'
import CalendarComponent from './component/calander'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <CalendarComponent />
      </div>
    </>
  )
}

export default App
