import { Link, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Welcome from "./Welcome"


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element ={<Welcome/>}/>
        <Route path="/:name" element ={<Welcome/>}/>
        <Route path="*" element ={
        <div>
          <p>Page doesnt not exist</p>
          <Link to="/">Back Home</Link>
          </div>}/>
      </Routes>
    </>
  )
}

export default App
