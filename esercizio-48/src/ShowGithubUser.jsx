import React from 'react'
import {Link, Outlet} from 'react-router-dom'


function ShowGithubUser () {
  return (
    <div>
        <Link to=":username">Link</Link>
        
        <Outlet/>
    </div>
  )
}

export default ShowGithubUser 