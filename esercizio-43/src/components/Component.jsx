import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'


function Component({arg}) {
    const [arr, setArr] = useState([])

    useEffect(() => {
      setArr(arg)}, [arg])

      const memoizedArr = useMemo(() => {
        return arr.filter((element) => {
          return element.age > 18
        })
      }, [arr])

  return (
    <div>
        {
            memoizedArr.map((element, index) => {
                return <p key={index}>name: {element.name} <br /> age: {element.age}</p>
            })
        }
    </div>
  )
}

export default Component