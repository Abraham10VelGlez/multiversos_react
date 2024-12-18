import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport, Environment } from '@react-three/drei';
import { Citygreen } from './Citygreen';
import { Dron } from './Dron';

export default function Component11() {
    const dronRef = useRef(); // Referencia al Dron

    // Función para hacer que la cámara siga al Dron
    function CameraFollowDron({ targetRef }) {
        const { camera } = useThree();

        useFrame(() => {
            if (targetRef.current) {
                const dronPosition = targetRef.current.position;

                // Ajusta la posición de la cámara
                camera.position.set(
                    dronPosition.x,
                    dronPosition.y + 15, // altura de la cámara
                    dronPosition.z + 10  // distancia detrás del dron
                );

                // Hacer que la cámara mire hacia el Dron
                camera.lookAt(dronPosition);
            }
        });

        return null;
    }

    // Actualizar la posición del Dron en cada frame


    return (
        <Canvas className="CanvasX" camera={{ position: [0, 15, 40], fov: 80 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Environment preset="city" metalness={0} roughness={0} />
            <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
                <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
            </GizmoHelper>

            <CameraFollowDron targetRef={dronRef} />


            {/* Modelo Dron con referencia */}
            <Suspense fallback={null}>
                {/* Cámara que sigue al Dron */}

                <Dron ref={dronRef} position={[10,0, 0]} scale={10} />
            </Suspense>
            {/*
      <Citygreen />
       <Citygreen   scale={10}  />
      Controles */}
            <Citygreen   scale={10}  />
            <OrbitControls />
        </Canvas>
    );
}
