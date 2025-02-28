import { useEffect, useState } from 'react';
import React from 'react'
import Navbar from './components/navbar';
import nav from './components/nav';
function App() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    alert("welcome")
  }, [])

  useEffect(() => {
    alert("the count is changed")
  }, [count]
  )
  return (
    <div className='div'>
      <Navbar />

      {/* the count is {count}
      <br />
      <button onClick={() => { setCount(count / 2) }}>update count</button> */}

    </div>
  )
}

export default App
