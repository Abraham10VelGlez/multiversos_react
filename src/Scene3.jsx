
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Scene3(props) {

    const group = useRef()
    const { nodes, materials, scene, animations } = useGLTF('/vehicule/bmw120/scene.gltf')
    const { actions, names } = useAnimations(animations, group)
    console.log(names);

    //activacion de animacion del modelo 3D
    useEffect(() => {
        console.log(names[0])
        //actions[names[0]].reset().play();       
        //if (names.length > 0) {
        actions[names[0]];
        actions['Animaci��n'];

        //actions[names[2]].reset().fadeIn(0.5).play();
    }, [actions, names]);



    const meshRef = useRef()
    //useFrame((state, delta) => (meshRef.current.rotation.x += delta / 10))


    return (

        <group ref={meshRef} {...props} dispose={null}>
            <primitive object={scene} position={[0, 0, 0]} scale="5" />
        </group>
    )
}

useGLTF.preload('../public/vehicule/bmw120/scene.gltf')
