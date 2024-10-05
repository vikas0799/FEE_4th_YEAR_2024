import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Goyal from './Goyal'

function App() {
  
  
    const [euroRate, setEuroRate] = useState(0);

    useEffect(() => {
        const fetchBitcoin = async () => {
            try {
                const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
                const data = await response.json();
                setEuroRate(data.bpi.EUR.rate);
            } catch (error) {
                console.error('Error', error);
            }
        }
        fetchBitcoin();
        ,[]);

  return (
    <>
   <h1>{euroRate}</h1>
    </>
  )
}

export default App;
