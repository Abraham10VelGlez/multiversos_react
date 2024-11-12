import React, { useRef, Suspense } from 'react';
import { useLayoutEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, Sphere, Html } from '@react-three/drei';
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer } from '@react-three/drei'
import { LayerMaterial, Color, Depth } from 'lamina'
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Model from './Scene2';
import Scene3 from './Scene3';
import Scene4 from './Scene4';
import Scene5 from './Scene5';
import Scene6 from './Scene6';
import Groundetectcar from './Groundetectcar';
import Groundinamic from './Groundinamic';




export default function Component10() {
    const [degraded, degrade] = useState(false)
    const carRef = useRef();
    return (
        <Canvas className='CanvasX' camera={{ position: [0, 50, 60], fov: 45 }} >
            <OrbitControls />



            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />


            {/*
            <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
            <ambientLight intensity={0.5} />
            <color attach="background" args={['#7657e6']} />
            background   <Environment preset='city' background metalness={0} roughness={0} />
 */}
            <Environment preset='city' metalness={0} roughness={0} />

            <Groundinamic></Groundinamic>

            <Scene3 ></Scene3>
            <Scene4 position={[20, 0, 0]}></Scene4>
            <Scene5 position={[-20, -5, 0]}></Scene5>
            {/*
                <Groundetectcar carRef={carRef} ></Groundetectcar>

               */}
            <Scene6 ref={carRef} position={[0, -1.5, 40]}></Scene6>



            {/* <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={5}>
                <Lightformers />
            </Environment> */}

            <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
            </GizmoHelper>



        </Canvas>
    );
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
    const group = useRef()
    useFrame((state, delta) => (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60))
    return (
        <>
            {/* Ceiling */}
            <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <group rotation={[0, 0.5, 0]}>
                <group ref={group}>
                    {positions.map((x, i) => (
                        <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
                    ))}
                </group>
            </group>
            {/* Sides */}
            <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
            <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
            {/* Accent (red) */}
            <Float speed={5} floatIntensity={2} rotationIntensity={2}>
                <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
            </Float>
            {/* Background */}
            <mesh scale={100}>
                <sphereGeometry args={[1, 64, 64]} />
                <LayerMaterial side={THREE.BackSide}>
                    <Color color="#444" alpha={1} mode="normal" />
                    <Depth colorA="blue" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
                </LayerMaterial>
            </mesh>
        </>
    )
}