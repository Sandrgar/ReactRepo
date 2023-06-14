import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function FiltredList({arg}) {
    const [arr, setArr] = useState([])

  useEffect(() => {
   setArr(arg.filter((element) => {
    return element.age > 18
   }))
  }, [arg])

  const memoizedArr = useMemo(() => arr,[arr])
    
    return (
        <div>
             {arr.map((element, index) => {
                return <li key={index}>name: {element.name} id: {element.id} age:{element.age}</li>
             })}
        </div>
    )
}

export default FiltredList