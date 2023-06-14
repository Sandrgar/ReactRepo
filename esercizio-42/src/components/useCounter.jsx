import React, { useState } from 'react'
import { useCallback } from 'react'


function useCounter ({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

   const handleIncrement = useCallback(function handleIncrement(){
    setCounter((c) => c +1)
   }, [])

   const handleDecrement = useCallback(function handleDecrement(){
    setCounter((c) => c -1)
   }, [])

   const handleReset = useCallback(function handleReset(){
    setCounter(initialValue)
   }, [initialValue])


   return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
}
}

export default useCounter

