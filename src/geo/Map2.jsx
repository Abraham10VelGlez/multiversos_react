import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Map2(props) {
    const { nodes, materials } = useGLTF('geomaps/2.gltf')
    return (
        <group
            {...props}
            dispose={null}
            position={[-50, 0, 0]} // Centra el modelo
            rotation={[Math.PI / 2, 0, 0]} // Asegúrate de que no está rotado
            scale={0.25} // Ajusta la escala si es necesario
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
        </group>
    )
}

useGLTF.preload('geomaps/2.gltf')
