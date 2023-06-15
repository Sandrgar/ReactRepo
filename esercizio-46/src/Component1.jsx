import React from 'react'
import {useNavigate} from 'react-router-dom'

function Component1() {
   const navigate = useNavigate()

   function HandleNavigateTo2(){
    navigate('/component2')
   }

   function HandleNavigateTo3(){
    navigate('/component3')
   }
   
    return (
        <div>
            <h1>Component 1</h1>
            <button onClick={HandleNavigateTo2}>Component 2</button>
            <button onClick={HandleNavigateTo3}>Component 3</button>
        </div>
    )
}

export default Component1