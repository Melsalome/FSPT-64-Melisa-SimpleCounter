import { useEffect, useState } from 'react'
import './App.css'
import { Componente } from './Componente'


function App() {

const [counterState, setCounterState] = useState(0)


useEffect( () => {
  let interval = setInterval ( () => {
    setCounterState(prevCounter => prevCounter + 1);
  }, 1000);

  let timeout = setTimeout(() => {
    clearInterval(interval);
    console.log('Intervalo detenido!');
  }, 15000);


  return () => {
    clearInterval(interval);
    clearTimeout(timeout);
  };
}, [])


  return (
    <>
     
   <Componente componenteProps={counterState}/>
   
    </>
  )
}

export default App
