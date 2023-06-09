

import React, { useEffect, useState } from 'react'

function Counter({inputValue = 0}) {
    const [count, setCounter] = useState(inputValue)




    useEffect(() => {
        console.log("Counter is" + "  " + count )

        return (() => {
            console.log("sto per essere smontato")
        })
    }, [count])

    setInterval(() => {
        setCounter(0)
    }, 1500);
    
    function handleClick (){
        setCounter((c) => c + 1)
    }
  return (
    <div>
        <div>
            <h1>Counter is : {count}</h1>
            <button onClick={handleClick}>Add</button>
        </div>
    </div>
  )
}

export default Counter