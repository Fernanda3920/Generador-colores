import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import  FormColor  from './components/FormColor'
import DisplayColors from './components/DisplayColors'

function App() {
  const [list, setList] = useState(new Values('red').all(3));
  console.log(list);
  return (
    <>
    <h1>Te amo mi vida</h1>
    <h2>Yo mucho mas bebe 🩷</h2>
      <FormColor setList={setList}></FormColor>
      <DisplayColors list = {list}/>
    </>
  )
}

export default App
