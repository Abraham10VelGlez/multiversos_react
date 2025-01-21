import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Dron = forwardRef(({ props }, ref) => {
    const { nodes, materials } = useGLTF('texture_dron/scene.gltf');
    const meshRef = useRef();

    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        up: false,
        down: false,
    });

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
                case 'w':
                    setMovement((prev) => ({ ...prev, up: true }));
                    break;
                case 's':
                    setMovement((prev) => ({ ...prev, down: true }));
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
                case 'w':
                    setMovement((prev) => ({ ...prev, up: false }));
                    break;
                case 's':
                    setMovement((prev) => ({ ...prev, down: false }));
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

    useFrame(() => {
        if (meshRef.current) {
            const speed = 0.9;
            const rotationSpeed = 0.03;

            const direction = new THREE.Vector3();
            meshRef.current.getWorldDirection(direction);

            // Movimiento hacia adelante y atrás
            if (movement.forward) {
                meshRef.current.position.add(direction.multiplyScalar(speed));
            }
            if (movement.backward) {
                meshRef.current.position.add(direction.multiplyScalar(-speed));
            }

            // Movimiento hacia arriba y abajo
            if (movement.up) {
                meshRef.current.position.y += speed;
            }
            if (movement.down) {
                meshRef.current.position.y -= speed;
            }

            // Rotaciones (yaw, pitch, roll)
            if (movement.left) {
                meshRef.current.rotation.y += rotationSpeed; // Yaw
            }
            if (movement.right) {
                meshRef.current.rotation.y -= rotationSpeed; // Yaw
            }

            // Simular inclinación (Pitch)
            if (movement.forward) {
                meshRef.current.rotation.x -= rotationSpeed / 2;
            }
            if (movement.backward) {
                meshRef.current.rotation.x += rotationSpeed / 2;
            }
        }
    });

    return (
        <group ref={meshRef} {...props} dispose={null}>
            <group scale={[0.737, 1.029, 1.908]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials['Material.007']}
                />
            </group>
            <group
                position={[-4.162, 0.584, 0.499]}
                rotation={[-0.027, -0.037, -0.019]}
                scale={[-0.631, 0.631, 0.631]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials['Material.005']}
                />
            </group>
            <group
                position={[-4.162, 0.584, -6.795]}
                rotation={[-0.028, -0.245, -0.024]}
                scale={[-0.631, 0.631, 0.631]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials['Material.005']}
                />
            </group>
            <group position={[4.098, 0.584, 0.499]} rotation={[-0.027, 0.037, 0.019]} scale={0.631}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_39.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_40.geometry}
                    material={materials['Material.005']}
                />
            </group>
            <group position={[4.098, 0.584, -6.795]} rotation={[-0.028, 0.245, 0.024]} scale={0.631}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_44.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_45.geometry}
                    material={materials['Material.005']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials['Material.001']}
                position={[0, 0, -0.24]}
                scale={[0.737, 1.029, 1.908]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials['Material.001']}
                position={[-0.013, 0.359, -2.086]}
                scale={[0.469, 0.325, 1.107]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials['Material.001']}
                position={[-2.565, -1.177, -0.015]}
                rotation={[0.018, 0.279, -0.179]}
                scale={[-0.917, 0.291, 0.291]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_15.geometry}
                material={materials['Material.001']}
                position={[2.503, -1.177, -0.015]}
                rotation={[0.018, -0.279, 0.179]}
                scale={[0.917, 0.291, 0.291]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials['Material.001']}
                position={[-2.565, -1.177, -6.363]}
                rotation={[3.123, 0.279, -2.963]}
                scale={[0.917, 0.291, 0.291]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_19.geometry}
                material={materials['Material.001']}
                position={[2.503, -1.177, -6.363]}
                rotation={[3.123, -0.279, 2.963]}
                scale={[-0.917, 0.291, 0.291]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_21.geometry}
                material={materials['Material.001']}
                position={[-0.006, -0.878, -3.334]}
                scale={[0.465, 1, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_23.geometry}
                material={materials['Material.001']}
                position={[0.034, -2.844, -2.521]}
                scale={[1.109, 0.675, 3.073]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_25.geometry}
                material={materials['Material.001']}
                position={[3.222, -0.807, -3.334]}
                scale={[-0.465, 1, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_27.geometry}
                material={materials['Material.004']}
                position={[-4.077, 0.647, 0.489]}
                rotation={[-0.027, -0.037, -0.019]}
                scale={[-1.685, 1.685, 1.685]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_32.geometry}
                material={materials['Material.004']}
                position={[-4.077, 0.647, -6.787]}
                rotation={[-0.028, -0.245, -0.024]}
                scale={[-1.685, 1.685, 1.685]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_37.geometry}
                material={materials['Material.004']}
                position={[4.012, 0.647, 0.489]}
                rotation={[-0.027, 0.037, 0.019]}
                scale={1.685}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_42.geometry}
                material={materials['Material.004']}
                position={[4.012, 0.647, -6.787]}
                rotation={[-0.028, 0.245, 0.024]}
                scale={1.685}
            />
        </group>
    );
});

useGLTF.preload('texture_dron/scene.gltf');

export { Dron };
