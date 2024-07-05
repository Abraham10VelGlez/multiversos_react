import React from 'react'
import Search_avg_gift from './search';
import MapeoJson from './componentmapeado';
import { use_search_gif } from './hookreutlizable';
import Loadavg from './loader';

export default function Componente8() {

  //hook es para hacer tareas reservada con js 
  const {valorin,onChange,gifs,onSubmit, carga} = use_search_gif()

  return (
    <>
      {/* uso de framemotion con buscador de gifs anime 
    yarn add framer-motion
    */}
      <Search_avg_gift
        valorin={valorin}
        onSubmit={onSubmit}
        onChange={onChange}
      />
      <br />
      {
        carga ? 
        (<Loadavg></Loadavg>) :
        (<MapeoJson gifs={gifs} ></MapeoJson>)
      }
      
      


      




    



    </>
  )
}