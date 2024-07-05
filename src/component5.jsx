import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, Sphere, Html } from '@react-three/drei';
import './mainx.css'

export default function Componente5() {


    function Boxx2(props) {
        // This reference gives us direct access to the THREE.Mesh object
        const ref = useRef()
        // Hold state for hovered and clicked events
        const [hovered, hover] = useState(false)
        const [clicked, click] = useState(false)
        //movimineto de la esfera
        //useFrame((state, delta) => (ref.current.rotation.x += delta))
        // Return the view, these are regular Threejs elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={ref}
                scale={clicked ? 1.5 : 1}

                onClick={(event) => click(onOpen)}
            /*onClick={(event) => click(!clicked)}*/
            /*onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(event) => hover(false)}*/
            >
                <sphereGeometry args={[14]} />
                <meshStandardMaterial color='#FFE6E6' /*metalness={2} roughness={0}*/ />
            </mesh>
        )
    }

    const onOpen = () => {
        alert("alerta de datos")
    }


    function Boxx3() {

        return (
            <mesh position={[10, -30, 0]}>
                <sphereGeometry args={[14]} />
                <meshStandardMaterial color='#2B67F1' metalness={5} roughness={1} />
            </mesh>
        )
    }

    function Boxx4() {

        return (
            <mesh position={[-20, -30, 0]}>
                <sphereGeometry args={[14]} />
                <meshStandardMaterial color='#E1AFD1' metalness={2} roughness={0} />
            </mesh>
        )
    }



    function Boxx5() {

        return (
            <mesh position={[30, 30, 0]}>
                <sphereGeometry args={[14]} />
                <meshStandardMaterial color='#AD88C6' metalness={2} roughness={0} />
            </mesh>
        )
    }


    function Boxx6() {

        return (
            <mesh position={[-40, -50, 0]}>
                <sphereGeometry args={[14]} />
                <meshStandardMaterial color='#7469B6' /*metalness={2} roughness={0}*/ />
            </mesh>
        )
    }




    return (
        <>
            <Canvas className='CanvasX' camera={{ position: [0, 0, 60], fov: 100 }} >
                <OrbitControls />

                <color attach="background" args={['#000']} />

                <Environment preset='forest' background metalness={0} roughness={0} />
                <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                    <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
                </GizmoHelper>

                <Boxx2 position={[0, 0, 0]} ></Boxx2>

                <Boxx3></Boxx3>


                <Boxx4></Boxx4>

                <Boxx5></Boxx5>

                <Boxx6></Boxx6>


                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[150, 50, 100, 100]} />
                    <meshStandardMaterial color='black' metalness={0} roughness={0} />
                </mesh>


            </Canvas>
        </>
    )
}