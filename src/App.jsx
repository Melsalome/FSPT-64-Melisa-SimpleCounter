import { useEffect, useState } from 'react'
import './App.css'
import { Componente } from './Componente'


function App() {

const [counterState, setCounterState] = useState(0)


useEffect( () => {
  let interval = setInterval ( () => {
    setCounterState(prevCounter => prevCounter + 1);
  }, 1000);

  return () => {
    clearInterval(interval);
    
  };
}, [])


  return (
    <>
     
   <Componente componenteProps={counterState}/>
   
    </>
  )
}

export default App
