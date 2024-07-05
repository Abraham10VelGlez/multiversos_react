import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import './mainx.css'

import { Environment, OrbitControls,Stars,GizmoHelper,GizmoViewport  } from '@react-three/drei'
import { useGLTF } from '@react-three/drei/native'
import { useSpring, animated } from '@react-spring/three'

export default function Componente6() {

    
  function Market_pmndrs(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cybertruck/model.gltf')
    return <primitive object={scene} {...props} />
  }

  
  function Korrigan(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/young-korrigan/model.gltf')
    return <primitive object={scene} {...props} />
  }


  
function Model(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/zombie-car/model.gltf')
    return <primitive object={scene} {...props} />
  }
function Model2(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-hat/model.gltf')
    return <primitive object={scene} {...props} />
  } 
function Model3(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/right-hand-white-webxr-tracking-ready/model.gltf')
    return <primitive object={scene} {...props} />
  } 
function Model4(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/palm-detailed-long/model.gltf')
    return <primitive object={scene} {...props} />
  } 
function Model5(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/palm-short/model.gltf')
    return <primitive object={scene} {...props} />
  }
  
function Model6(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cromlech/model.gltf')
    return <primitive object={scene} {...props} />
  }

    return (
        <>
            <Canvas className='CanvasX' camera={{ position: [0, 0, 60], fov: 100 }} >
                <OrbitControls />

                <color attach="background" args={['#FFEAE3']} />

                <Environment preset='forest'  metalness={0} roughness={0} />
                <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                    <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
                </GizmoHelper>

                <Market_pmndrs position={[2/8,-3/1,-12/2]}  ></Market_pmndrs>


                <Korrigan position={[0,8,0]} />


                {/* <ambientLight intensity="30" />*/}
        {/*cubo*/}
        {/* PARTE IZQUIERDA DE LA PUERTA*/}
        <mesh position={[0,-0.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'  metalness={0} roughness={0} />          
        </mesh>
        <mesh position={[0,-1.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'  metalness={0} roughness={0} />          
        </mesh>
        <mesh position={[0,-2.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'  metalness={0} roughness={0} />          
        </mesh>
        {/* PARTE IZQUIERDA DE LA PUERTA*/}

          {/* PARTE DERECHA DE LA PUERTA*/}
        <mesh position={[3,-0.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'  metalness={0} roughness={0} />          
        </mesh>
        <mesh position={[3,-1.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'  metalness={0} roughness={0}  />          
        </mesh>
        <mesh position={[3,-2.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'   metalness={0} roughness={0} />          
        </mesh>
        {/* PARTE DERECHA DE LA PUERTA*/}

        {/* PARTE SUPERIOR DE LA PUERTA*/}
        <mesh position={[3,0.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'  metalness={0} roughness={0}  />          
        </mesh>

        <mesh position={[2,0.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'  metalness={0} roughness={0}  />          
        </mesh>

        <mesh position={[1,0.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'   metalness={0} roughness={0}  />          
        </mesh>


        <mesh position={[0,0.5,5]}>
          <boxGeometry />
            <meshStandardMaterial color='blue'  metalness={0} roughness={0}  />          
        </mesh>
        {/* PARTE SUPERIOR DE LA PUERTA*/}

        
        <mesh position={[0,5,-3]} >
          <sphereGeometry color="white"  metalness={0} roughness={0}  />            
        </mesh>

        
        <Model position={[-3,-2.5,3]} ></Model>
        <Model2 position={[-8,-3,3]} ></Model2>        
        <Model3 position={[6,-2.5,3]}  ></Model3>
        <Model4 position={[3,-3,3]}  ></Model4>
        <Model5 position={[-10,-3,3]}  ></Model5>
        

        

        <group position={[0,-3,0]} >
       
        <mesh castShadow receiveShadow position={[0,5,0]} >
            <boxGeometry  args={[17,10,1]} />
            <meshStandardMaterial color={['#000']}  envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
        </mesh>        
        {/*cilidnro*/}
        <mesh position={[0,-5,0]}  >
          <cylinderGeometry args={[10,10,10,64]} />
          <meshStandardMaterial color='green' metalness={0} roughness={0} />          
        </mesh>
            
        
        </group>
        <Stars radius={50}  depth={50} count={5000} factor={20} saturation={0} fade speed={1} />
 


            </Canvas>
        </>
    )
}