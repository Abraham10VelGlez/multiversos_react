import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Matrix4, Quaternion, Vector3 } from 'three';
import { updatePlaneAxis } from './controls';

const x = new Vector3(1, 0, 0);
const y = new Vector3(0, 1, 0);
const z = new Vector3(0, 0, 1);
export const planePosition = new Vector3(0, 3, 7);

const delayedRotMatrix = new Matrix4();
const delayedQuaternion = new Quaternion();

export function Aviondos(props) {
    //const { nodes, materials } = useGLTF('avion2/airplane.glb');
    const { nodes, materials } = useGLTF('avion3/a-10_thunderbolt_ii_warthog_plane__avion.glb');
    console.log(nodes);

    const groupRef = useRef();
    ///rotacion de la elize
    //const helixMeshRef = useRef();

    useFrame(({ camera }) => {
        updatePlaneAxis(x, y, z, planePosition, camera);

        const rotMatrix = new Matrix4().makeBasis(x, y, z);

        const matrix = new Matrix4()
            .multiply(new Matrix4().makeTranslation(planePosition.x, planePosition.y, planePosition.z))
            .multiply(rotMatrix);

        groupRef.current.matrixAutoUpdate = false;
        groupRef.current.matrix.copy(matrix);
        groupRef.current.matrixWorldNeedsUpdate = true;


        var quaternionA = new Quaternion().copy(delayedQuaternion);

        // warning! setting the quaternion from the rotation matrix will cause
        // issues that resemble gimbal locks, instead, always use the quaternion notation
        // throughout the slerping phase
        // quaternionA.setFromRotationMatrix(delayedRotMatrix);

        var quaternionB = new Quaternion();
        quaternionB.setFromRotationMatrix(rotMatrix);

        var interpolationFactor = 0.175;
        var interpolatedQuaternion = new Quaternion().copy(quaternionA);
        interpolatedQuaternion.slerp(quaternionB, interpolationFactor);
        delayedQuaternion.copy(interpolatedQuaternion);

        delayedRotMatrix.identity();
        delayedRotMatrix.makeRotationFromQuaternion(delayedQuaternion);

        const cameraMatrix = new Matrix4()
            .multiply(new Matrix4().makeTranslation(planePosition.x, planePosition.y, planePosition.z))
            .multiply(delayedRotMatrix)
            .multiply(new Matrix4().makeRotationX(-0.2))
            .multiply(
                // para la avioneta
                //new Matrix4().makeTranslation(0, 0.015, 0.3)
                // para jet
                new Matrix4().makeTranslation(10, 100.015, 0.3)
            );

        camera.matrixAutoUpdate = false;
        camera.matrix.copy(cameraMatrix);
        camera.matrixWorldNeedsUpdate = true;


        ///rotacion de la elize
        //helixMeshRef.current.rotation.z -= 1.0;
    });

    return (
        <>

            {/*
            <group ref={groupRef}>
                <group {...props} dispose={null} scale={0.01} rotation-y={Math.PI}>
                    <mesh geometry={nodes.supports.geometry} material={materials['Material.004']} />
                    <mesh geometry={nodes.chassis.geometry} material={materials['Material.005']} />
                    <mesh geometry={nodes.helix.geometry} material={materials['Material.005']} ref={helixMeshRef} />
                </group>
            </group>
 */}
            <group ref={groupRef}>
                <group  {...props} dispose={null} scale={5} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_2.geometry}
                        material={materials.blinn1SG}
                    ///rotacion de la elize
                    //ref={helixMeshRef}                        
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.detalles_4_aiStandardSurface16SG}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials.detalles_4_aiStandardSurface18SG}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_5.geometry}
                        material={materials.lambert3SG}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_6.geometry}
                        material={materials.lambert4SG}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_7.geometry}
                        material={materials.lambert5SG}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_8.geometry}
                        material={materials.lambert6SG}

                    />
                </group>
            </group>



        </>
    )
}

//useGLTF.preload('avion2/airplane.glb');
useGLTF.preload('avion3/a-10_thunderbolt_ii_warthog_plane__avion.glb');