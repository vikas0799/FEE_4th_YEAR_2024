// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      {/* <h1>welcome to g3 app componenet</h1> */}
      <Navbar />
      <main>
        <Card />
        <Card />
        <Card />
      </main>

      <Footer />
    </>
  );
}

export default App;
