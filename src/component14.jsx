import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, Sphere,Html  } from '@react-three/drei';
import './mainx.css'
import App from './component2';
import Model4 from './Scene2';
import Modeloearth from './Modeloearth';
import Geo1 from './Geo1';
import Map1 from './geo/Map1';
import { Map2 } from './geo/Map2';


export default function Component14() {

    return (
        <>
            <Canvas className='CanvasX' camera={{ position: [0, 0, 60], fov: 25 }} >
                <OrbitControls />

                
                {/*background
                <color attach="background" args={['#000']} />
                */}
                <Environment   preset='city' metalness={0} roughness={0} />

{/*
                <Stars saturation={0} count={8000} speed={3} />*/}

                <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                    <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
                </GizmoHelper>
                {/*<Html position={[-4, 10, 0]}>
                    <Geo1></Geo1>
                </Html>*/}

                
                <Map1></Map1>
                <Map2></Map2>


        
        

            </Canvas>
        </>
    )
}