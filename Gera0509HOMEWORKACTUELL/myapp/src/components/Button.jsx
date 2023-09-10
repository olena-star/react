import React from 'react'

export default function Button() {
    const onSubmitHandler =(event)=>{
const x = event.clientX;
const y = event.clientY;
console.log(`Mause: ${x}, ${y}`);
    }
  return (
    <button onClick={onSubmitHandler}>where Am I</button>
  )
}
