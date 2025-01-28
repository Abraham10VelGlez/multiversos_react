import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {  useFrame } from '@react-three/fiber'
export default function Modeloearth(props) {
  const { nodes, materials } = useGLTF('/scene2.gltf')
  const meshRef = useRef()
  
  useFrame((state, delta) => (meshRef.current.rotation.y += delta/10))  
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={10} />
    </group>
  )
}

useGLTF.preload('/scene2.gltf')