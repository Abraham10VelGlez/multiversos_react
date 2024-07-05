import React from 'react'
import { Canvas } from '@react-three/fiber'
import './mundo7.css'

import { OrbitControls,Environment } from '@react-three/drei'
import { useGLTF } from '@react-three/drei/native'
import Modelhuman from './modelohuman'
import Modelomono from './modelo_mono'
import Modelosobrero from './modelosobrero'
import Modelwomen from './modelowomen'
import Modeloold from './modeloold'


export default function Componente7() {

  return (
    <>
      <Canvas className='body' camera={{ position: [0, 0, 60], fov: 5 }} >
        <OrbitControls />

        <color attach="background" args={['#94FFD8']} />
        <Environment preset='forest'   metalness={0} roughness={0} />


        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <group position={[0, -1, 0]}>
          <mesh position={[-2, 0, -3]} >
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>

          <Modelhuman></Modelhuman>

          <Modelomono position={[2, 0, 3]} ></Modelomono>


          <Modelosobrero position={[-1, 0, 5]} ></Modelosobrero>


          <Modelwomen position={[-2, 0, 1]} ></Modelwomen>


          <Modeloold position={[1, 0, 2]}></Modeloold>

        </group>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >

          <planeGeometry args={[10, 10, 1, 1]}></planeGeometry>
          <shadowMaterial transparent opacity={0.2} />
        </mesh>


      </Canvas>
    </>
  )
}