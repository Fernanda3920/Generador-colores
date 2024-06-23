import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Values from 'values.js'
import './App.css'
import  FormColor  from './components/FormColor'
import DisplayColors from './components/DisplayColors'

function App() {
  // El nuero es el porcentaje de tonos a partir del color base
  const [list, setList] = useState(new Values('red').all(10));
  console.log(list);
  return (
    <>
      <FormColor setList={setList}></FormColor>
      <DisplayColors list = {list}/>
    </>
  )
}

export default App
