import { useState } from 'react'
import React from 'react'
import { Welcome } from './Components/Welcome'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/>
    </>
  )
}

export default App
