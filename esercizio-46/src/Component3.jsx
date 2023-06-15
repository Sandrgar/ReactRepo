import React from 'react'
import {useNavigate} from 'react-router-dom'

function Component3() {
    const navigate = useNavigate()

    function HandleNavigateTo1(){
     navigate('/')
    }
 
    function HandleNavigateTo2(){
     navigate('/component2')
    }
    return (
        <div>
            <h1>Component 3</h1>
            <button onClick={HandleNavigateTo1}>Component 1</button>
            <button onClick={HandleNavigateTo2}>Component 2</button>
        </div>
    )
}

export default Component3