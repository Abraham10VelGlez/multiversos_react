import React from 'react'
import Setimage from './setimage'
import './buscador.css'
export default function MapeoJson({ gifs }) {

    return (
        <div className='mapeo-gifs'>
        
            {gifs.map((gif,index) => (
                <Setimage className='gif'  key={gif.id} gif={gif} index={index} ></Setimage>
            ))}
        
        </div>
    )
}