import React from 'react';
import {  Link, Route, Routes  } from 'react-router-dom';
//BrowserRouter as Router
import World1 from './pag2';
import World2 from './pag3';
import Componente4 from './component4';
import Componente5 from './component5';
import Componente6 from './component6';
import Componente7 from './component7';
import Componente8 from './component8';
import Componente9 from './component9';
import Component10 from './component10';
import Component11 from './component11';
import Component12 from './component12';
export default function App() {
  return (   
     /*<Router>*/        
     <Routes>         
     <Route  path="/" index  element={ <Home/> } />
       <Route path="/wolrd" element={ <World1/> } />
       <Route path="/world2" element={ <World2/>} />
       <Route path="/world3" element={ <About/>} />
       <Route path="/world4" element={ <Componente4/>} />
       <Route path="/world5" element={ <Componente5/>} />
       <Route path="/world6" element={ <Componente6/> } />
       <Route path="/world7" element={ <Componente7/> } />
       <Route path="/world8" element={ <Componente8/> } />
       <Route path="/world9" element={ <Componente9/> } />
       <Route path="/world11" element={ <Component10></Component10> } />
       <Route path="/world10" element={ <Component11></Component11> } />
       <Route path="/world111" element={ <Component12/> } />
       {/* comodin para dar por defecto la pagina que no sirve */}
       <Route path="*" element={<NotFound></NotFound>} />
     </Routes>
   /*</Router>*/
  );
}

function Navbar() {
  // visible on every page
  return <> NAVEGACION DE RUTAS</>
}

function Home() {
  return (
  <>
  <p>MENU ABRAHAM, MULTIVERSO DE IDEAS</p>
  <ul>
    <li><Link to='/wolrd'>MUNDO 1</Link></li>
    <li><Link to='/world2'>MUNDO 2</Link></li>
    <li>MUNDO 3</li>
    <li><Link to='/world4'>MUNDO 4</Link></li>
    <li><Link to='/world5'>MUNDO 5</Link></li>
    <li><Link to='/world6'>MUNDO 6</Link></li>
    <li><Link to='/world7'>MUNDO 7</Link></li>
    <li><Link to='/world8'>MUNDO 8 Buscador de gifs</Link></li>
    <li><Link to='/world11'>MUNDO 9 DE MOVIMIENTOS</Link></li>
    <li><Link to='/world10'>MUNDO 10</Link></li>
    <li><Link to='/world111'>MUNDO 11</Link></li>
  </ul>
  </>);
}

function About() {
  return <>MUNDO EN DESARROLLO</>;
}
function NotFound() {
  return (<><p>Ha llegado a una página que no existe :| </p></>);
}

