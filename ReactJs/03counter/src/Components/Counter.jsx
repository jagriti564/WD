import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    const add = () =>{
        setCounter(counter+1)
    }
    const remove = () =>{
        setCounter(counter-1)
    }
  return (
    <>
    <p className='text-center py-5 text-3xl'>Counter Value : {counter}</p>
    <div className='flex justify-center'>
        <button className='bg-green-500 text-white py-2 px-4 rounded-md m-2' 
        onClick={add}
        >Add</button>
        <button className='bg-green-500 text-white py-2 px-4 rounded-md m-2'
        onClick={remove}
        >Remove</button>
    </div>
    </>
  )
}

export default Counter