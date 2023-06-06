import { useState } from "react"

export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    function handleCounter(){
     setCounter((c) => c + 1)
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleCounter}>Increment</button>
        </div>
    )
}

export default Counter