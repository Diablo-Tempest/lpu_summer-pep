import Card from './Component/Card.jsx'
import './App.css'
import Navbar from './Component/Navbar.jsx'
import C1 from './Component/C1.jsx'
import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0);
  return (
    // XML - is used to store, organize, and tranport data in a structured, human-readable, and machine readable format.
    // JSX fragment

    // State is an Object that stores current imformation about the said component.
    <> 
    <Navbar name="Biprosom"/>
      <h1 className='h1Design'>Hello World</h1>
      <div className='flex flex-wrap'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      <C1 name="Biprosom" num={num}/>
      <button className='addBtn' onClick={()=>{setNum(num+1)}}>+</button>
      <button className='resetBtn' onClick={()=>{setNum(0)}}>Reset</button>
      <button className='subsBtn' onClick={()=>{setNum(num-1)}}>-</button>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At officia incidunt maiores odio, aspernatur earum voluptatem iusto ratione quos totam possimus. Commodi atque odit voluptatem? Sint, ad! Quas, molestias deserunt?</p>
    </>
  )
}

export default App

// <?xml version="1.0" encoding="UTF-8"?>
// <student>
//   <name>John Doe</name>
//   <registrationNo>12345678</registrationNo>
//   <course>MERN STACK</course>
//   <age>28</age>
// </student>
