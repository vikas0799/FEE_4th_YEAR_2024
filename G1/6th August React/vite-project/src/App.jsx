import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { People } from "./People";
import { SignUpOne } from "./SignUpOne";
import Ayush from "./Ayush";
import { ReceiptEuroIcon } from "lucide-react";
import Theform from "./Theform";
import Signin from "./Signin";

function App() {
  let name = "ashu singh";
  let age = 23;
  // let cnt=0;
  const [cnt, setCnt] = useState(0);
  function increase() {
    cnt++;
    console.log(cnt);
  }
  let myList = ["vikas", "patel"];
  return (
    <>
      {/* <Ayush name={name} age={age}/>
    <Ayush name={"vikas"} age={26}/>
    <RecipeReviewCard /> */}
      {/* <h1>my name is {name}</h1> */}
      <h1>{cnt}</h1>
      <button onClick={()=>{setCnt(prevCount => prevCount + 1);}}>clikc me</button>
      {/* <button onClick={increase}>clik me</button>
      <button onClick={()=>{cnt++;console.log(cnt);}}>click me</button>
      <button onClick={()=>{setCnt(cnt+1)}}>increase me</button> */}

      {/* {myList.map((item,i) => (
        // <li key={i}>{item}</li>
        <div key={i}>
          <h1>{i}</h1>
            <h1>{i}{item}</h1>
        </div>
      ))} */}
      {/* <Theform /> */}
      {/* <Signin /> */}
    </>
  );
}

export default App;
