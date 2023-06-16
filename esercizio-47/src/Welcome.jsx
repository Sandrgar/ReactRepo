import React from 'react'
import { useParams } from 'react-router-dom'

function Welcome() {
   const{name}= useParams()
  return (
    <div>
        <h1>Ciao, {name}</h1>
    </div>
  )
}

export default Welcome