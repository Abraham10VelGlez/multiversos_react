import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThreeJSAVG from './layoutbasic'
import React from 'react';
import Pagina2 from './main2';


export default function Geo1() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1> MUNDO GEOGRAFICO</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          CUENTA REGRESIVA {count}
        </button>
        <br/><br/>
        
       
        <p>
         Abraham
        </p>
      </div>
      <p className="read-the-docs">
       Tecnologías Unidas IGECEM + Dji Terra + Blender + Threejs + Reactjs
      </p>
      
    </>
  )
}


