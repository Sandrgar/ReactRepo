import React from 'react'
import {useNavigate} from 'react-router-dom'

function Component2() {
    const navigate = useNavigate()

    function HandleNavigateTo1(){
     navigate('/')
    }
 
    function HandleNavigateTo3(){
     navigate('/component3')
    }
    
    return (
        <div>
            <h1>Component 2</h1>
            <button onClick={HandleNavigateTo1}>Component 1</button>
            <button onClick={HandleNavigateTo3}>Component 3</button>
        </div>
    )
}

export default Component2