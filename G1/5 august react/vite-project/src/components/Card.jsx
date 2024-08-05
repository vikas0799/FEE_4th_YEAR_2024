import React from 'react'

function Card({age,name,batch}) {
// console.log(props);
console.log(age);
  return (
    <>
    <h2>card components</h2>
    {/* <h1>{props.data}</h1> */}
    <h1>{age}</h1>
    <h1>{name}</h1>
    <h1>{batch}</h1>
    </>
  )
}

export default Card