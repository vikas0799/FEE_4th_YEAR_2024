import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { People } from './People'
import { SignUpOne } from './SignUpOne'
import Ayush from './Ayush'
import { ReceiptEuroIcon } from 'lucide-react'
import {RecipeReviewCard} from './RecipeReviewCard'

function App() {
  let name="ashu singh";
 let age=23;

  return (
    <>
    <Ayush name={name} age={age}/>
    <Ayush name={"vikas"} age={26}/>
    <RecipeReviewCard />
  {/* <h1>my name is {name}</h1> */}
    </>
  )
}

export default App
