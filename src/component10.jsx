import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, Sphere, Html } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Model from './Scene2';
import Scene3 from './Scene3';
import Scene4 from './Scene4';
import Scene5 from './Scene5';
import Scene6 from './Scene6';



export default function Component10() {


    return (
        <Canvas className='CanvasX' camera={{ position: [0, 0, 60], fov: 25 }} >
            <OrbitControls />

            <color attach="background" args={['#000']} />
            {/*background*/}
            <Environment preset='city' metalness={0} roughness={0} />
            <Stars saturation={0} count={800} speed={3} />
            <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
            </GizmoHelper>

            <Suspense fallback={null}>
                <Scene3 ></Scene3>
                <Scene4 position={[20, 0, 0]}></Scene4>
                <Scene5 position={[-20, 0, 0]}></Scene5>
                <Scene6 position={[0, 0, 40]}></Scene6>
            </Suspense>


        </Canvas>
    );
}
