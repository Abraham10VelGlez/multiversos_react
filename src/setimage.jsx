import React, { useRef } from 'react'
import { motion, AnimatePresence, animate, delay, useInView } from "framer-motion"
import './buscador.css'
//variantes de estados de motion
const variants = {
    initial: {
        opacity: 0, scale: 0
    },
    //creacion de una funcion de flecha
    animate: ({ index }) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            delay: index * .1 /// incrementa el tiempo de visible
        }
    })

}

export default function Setimage({ gif, index }) {
    //hook para monitorear en tiempo real
    const ref = useRef(null)
    ///hook para use en view de frame motion
    const imgvista = useInView(ref,
        {
            //para activar una sola vez al pasar el campo de vision de la pantalla
            // once: true

        }


    )




    return (
        <>
            {/*<img alt={gif.tittle} src={gif.images.original.url} />*/}
            <motion.img
                className='gif'
                drag // propiedad para animar a los gif
                initial="initial"
                animate={imgvista ? "animate" : ""} /// si esta visto ya no animes si no animalo
                variants={variants}
                custom={{ index }}
                ref={ref}
                whileHover={{ scale: 1.1 }}
                /*
                forma simple de hacer un efecto de imagenes
                    initial={{ opacity: 0, scale: 0 }} //estado inicial de animacion
                    animate={{
                        opacity: 1, scale: 1, transition: {
                            duration: 1
                        }
                    }} // estado final de animacion
                    */
                alt={gif.tittle}
                src={gif.images.original.url}

            />

        </>
    )
}