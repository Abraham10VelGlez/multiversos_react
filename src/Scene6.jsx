import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Scene6(props) {
    const group = useRef();
    const meshRef = useRef();

    const { nodes, materials, scene, animations } = useGLTF('/vehicule/bocho/scene.gltf');
    const { actions, names } = useAnimations(animations, group);

    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
    });

    // Activación de animación del modelo 3D
    useEffect(() => {
        if (actions[names[0]]) {
            actions[names[0]].play();
        }
    }, [actions, names]);

    // Escuchar los eventos de teclado
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    setMovement((prev) => ({ ...prev, forward: true }));
                    break;
                case 'ArrowDown':
                    setMovement((prev) => ({ ...prev, backward: true }));
                    break;
                case 'ArrowLeft':
                    setMovement((prev) => ({ ...prev, left: true }));
                    break;
                case 'ArrowRight':
                    setMovement((prev) => ({ ...prev, right: true }));
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    setMovement((prev) => ({ ...prev, forward: false }));
                    break;
                case 'ArrowDown':
                    setMovement((prev) => ({ ...prev, backward: false }));
                    break;
                case 'ArrowLeft':
                    setMovement((prev) => ({ ...prev, left: false }));
                    break;
                case 'ArrowRight':
                    setMovement((prev) => ({ ...prev, right: false }));
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // Control del movimiento del carro
    useFrame(() => {
        if (meshRef.current) {
            const speed = 0.1; // Ajusta la velocidad del carro
            const rotationSpeed = 0.03; // Ajusta la velocidad de rotación

            // Movimiento hacia adelante y atrás
            if (movement.forward) meshRef.current.position.z -= speed;
            if (movement.backward) meshRef.current.position.z += speed;

            // Rotación hacia la izquierda y derecha
            if (movement.left) meshRef.current.rotation.y += rotationSpeed;
            if (movement.right) meshRef.current.rotation.y -= rotationSpeed;
        }
    });

    return (
        <group ref={meshRef} {...props} dispose={null}>
            <primitive object={scene} position={[0, 0, 0]} scale={0.05} />
        </group>
    );
}

useGLTF.preload('/vehicule/bocho/scene.gltf');


/*


import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Scene6(props) {

    const group = useRef()
    const { nodes, materials, scene, animations } = useGLTF('/vehicule/bocho/scene.gltf')
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

    
    useFrame(() => {
      if (meshRef.current) {
        // Ajusta la velocidad y dirección del movimiento
        meshRef.current.position.z -= 0.05;
      }
    });


    return (

        <group ref={meshRef} {...props} dispose={null}>
            <primitive object={scene} position={[0, 0, 0]} scale=".05" />
        </group>
    )
}

useGLTF.preload('../public/vehicule/bocho/scene.gltf')

*/