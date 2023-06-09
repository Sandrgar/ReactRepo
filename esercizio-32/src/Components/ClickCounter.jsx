import { useState } from "react"
import { useEffect } from "react"

export function ClickCounter({InputValue = 0}){
    const [counter, setCounter] = useState(InputValue)

    useEffect(() => {console.log("Counter added by" + " " + counter)}, [counter])

    function handleAdd(){
     setCounter((c)=> c + 1)
    }

    return (
         <div>
            <h1>Counter is: {counter}</h1>
            <button onClick={handleAdd} >Add</button>
         </div>
    )
}