import React from "react";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Citygreen } from './Citygreen';
import { Dron } from './Dron';
import { Avionuno } from './Avionuno';
import * as THREE from 'three';
import { Aviondos } from "./Aviondos";
import { Mount } from "./Mount";
import { SphereEnv } from "./SphereEnv";
import { MotionBlur } from "./MotionBlur";


export default function Component12() {

/*
VERIFICAR SI MI TEXTURAS SE VEN, O ESTAN EN LA RUTA CORRECTA
    fetch("textures2/envmap.hdr")
        .then((response) => {
            if (response.ok) {
                console.log("File loaded successfully:", response);
            } else {
                console.error("Failed to load file:", response.status, response.statusText);
            }
        })
        .catch((error) => console.error("Error fetching file:", error));
 */


    return (
        <Canvas shadows className="CanvasX"
        // camera={{ position: [-60, 180, 200], fov: 80 }}
        >
            <SphereEnv />
            <Environment
                background={false}
                files={"textures2/envmap.hdr"}                
            />



            <PerspectiveCamera makeDefault position={[0, 10, 10]} />
            <Mount />
            <Aviondos />

            <directionalLight
                castShadow
                color={"#f3d29a"}
                intensity={2}
                position={[10, 5, 4]}
                shadow-bias={-0.0005}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.01}
                shadow-camera-far={20}
                shadow-camera-top={6}
                shadow-camera-bottom={-6}
                shadow-camera-left={-6.2}
                shadow-camera-right={6.4}
            />

            <EffectComposer>
                <MotionBlur />
                <HueSaturation
                    blendFunction={BlendFunction.NORMAL} // blend mode
                    hue={-0.15} // hue in radians
                    saturation={0.1} // saturation in radians
                />
            </EffectComposer>



        </Canvas >
    );
}
