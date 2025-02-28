import { useState } from 'react'
import Calculator from './component/calc'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Calculator />
      </div>
    </>
  )
}

export default App
