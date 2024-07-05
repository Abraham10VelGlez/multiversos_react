import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThreeJSAVG from './layoutbasic'
import React from 'react';
import Pagina2 from './main2';


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Vite + React (Yarn)+ ThreeJS  </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          CUENTA CLICK {count}
        </button>
        <br/><br/>
        <a href='#' >
            SIGUIENTE PAGINA          
        </a>
       
        <p>
         Abraham
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Cube Geometry (AVG)
      </p>
      <ThreeJSAVG/>
    </>
  )
}


