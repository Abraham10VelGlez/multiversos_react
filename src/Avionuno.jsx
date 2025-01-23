import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Avionuno(props) {
  const { nodes, materials } = useGLTF('avion1/scene.gltf');
  const [position, setPosition] = useState([180, 180, 0]); // [x, y, z]
  const [rotation, setRotation] = useState([0, 0, 1.8]); // [x, y, z]

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition((prev) => {
        const newPos = [...prev];
        const speed = 10; // Velocidad de movimiento

        switch (event.key) {
          case 'ArrowUp': // Mover hacia adelante
            newPos[1] -= speed;
            break;
          case 'ArrowDown': // Mover hacia atrás
            newPos[1] += speed;
            break;
          case 'ArrowLeft': // Girar a la izquierda
            setRotation((prevRot) => [prevRot[0], prevRot[1] + 0.1, prevRot[2]]);
            break;
          case 'ArrowRight': // Girar a la derecha
            setRotation((prevRot) => [prevRot[0], prevRot[1] - 0.1, prevRot[2]]);
            break;
          default:
            break;
        }
        return newPos;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      position={position}
      rotation={rotation}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload('avion1/scene.gltf');
