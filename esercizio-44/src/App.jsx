import { Routes } from "react-router"
import { Route } from "react-router"
import Counter from "./Counter"

function App() {
  

  return (
    <>
      <Routes>
        <Route path = "/" element={<Counter/>}/>
      </Routes>
    </>
  )
}

export default App
