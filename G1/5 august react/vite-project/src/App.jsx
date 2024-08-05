import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { Navbar } from './Navbar'

function App() {
let age=20,name="kartik", batch="g1";
console.log(age);

  return (
    <>
    {/* <h1>welcome to g1</h1>
    <h1>{a}</h1>
    {/* <Card  data={a} name="anmol" age={23}/> */}
      {/* <Card age={23} name="anmol" batch="g1"/> */}
   {/* <Card age={age} name={name} batch={batch} />  */} 
   {/* <h1 className="text-6xl font-bold underline">
      Hello world!
    </h1> */}
    <Navbar />
    </>

  )
}

export default App
