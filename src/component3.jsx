import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, Sphere,Html  } from '@react-three/drei';
import './mainx.css'

export default function Componente3() {

    return (
        <>
            <Canvas className='CanvasX' camera={{ position: [0, 0, 60], fov: 25 }} >
                <OrbitControls />

                {/*<color attach="background"  args={['#588']} />*/}
                
                <Environment preset='forest' background metalness={0} roughness={0} />
                <Stars saturation={0} count={800} speed={3} />
                <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                    <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
                </GizmoHelper>
                <Html position={[0, 0, 0]}>
                MODELOS 3D
                </Html>
        
                
        

            </Canvas>
        </>
    )
}