import { Routes } from "react-router-dom"
import { Route } from "react-router-dom";
import GithubUser from "./GithubUser";
import ShowGitHubUser from "./ShowGithubUser "

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<ShowGitHubUser />} />
        <Route path="/users:username" element={<ShowGitHubUser />} />
        <Route path="/:username" element={<GithubUser />} />
      </Routes>
    </>
  )
}

export default App
