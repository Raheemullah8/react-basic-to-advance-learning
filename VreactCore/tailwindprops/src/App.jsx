import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
  <h1 className='bg-green-400 p-5 rounded-md mb-5'>tealwind test</h1>
  <Card userName="practice" btn="Save" />
  <Card/>
    </>
  )
}

export default App
