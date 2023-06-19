import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser"
import GithubUser from "./GithubUser"
import GithubUserList from "./GithubUserList"

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<GithubUserList/>}/>
      <Route path="/users" element={<ShowGithubUser/>}>
        <Route index element={<h3>Click the link to show user data</h3>}/>
        <Route path=":username" element={<GithubUser/>}/>
      </Route>
      
    
     </Routes>
    </>
  )
}

export default App
