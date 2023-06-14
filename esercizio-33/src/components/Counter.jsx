

import React, { useEffect, useState } from 'react'

function Counter({ inputValue = 0 }) {
    const [count, setCounter] = useState(inputValue)




    useEffect(() => {
        const id = setInterval(() => {
            setCounter(0)
        }, 2000)

        return () => {
            clearInterval(id)
            console.log(count)
        };
    }, [count])



    function handleClick() {
        setCounter((c) => {
            return c + 1
        })
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