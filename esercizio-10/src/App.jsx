import { useState } from 'react'
import { Welcome } from './Components/Welcome'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome name ="Jhon"/>
    </>
  )
}

export default App
