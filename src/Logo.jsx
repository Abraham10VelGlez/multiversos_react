import { Environment, OrbitControls,Stars,GizmoHelper,GizmoViewport  } from '@react-three/drei';
import { useGLTF } from '@react-three/drei/native';
import { useSpring, animated } from '@react-spring/three';

export default function Logo(){
    return(
        <>
          <mesh   position={[-25, 1, 3]}    >
  <boxGeometry />
  <meshStandardMaterial  color='#2ef8a0' transparent   wireframe:true />
</mesh>
<mesh   position={[-25, 2, 3]}    >
  <boxGeometry />
  <meshStandardMaterial  color='#2ef8a0' transparent   wireframe:true />
</mesh>
<mesh   position={[-25, 3, 3]}    >
  <boxGeometry />
  <meshStandardMaterial  color='#2ef8a0' transparent   wireframe:true />
</mesh>
<mesh   position={[-25,4, 3]}    >
  <boxGeometry />
  <meshStandardMaterial  color='#2ef8a0' transparent   wireframe:true />
</mesh>
<mesh   position={[-25,5, 3]}    >
  <boxGeometry />
  <meshStandardMaterial  color='#2ef8a0' transparent   wireframe:true />
</mesh>




<mesh   position={[-22,2, 3]}    >
  <boxGeometry />
  <meshStandardMaterial  color='#2ef8a0' transparent   wireframe:true />
</mesh>
<mesh   position={[-22,3, 3]}    >
  <boxGeometry />
  <meshStandardMaterial  color='#2ef8a0' transparent   wireframe:true />
</mesh>

<mesh   position={[-21,5, 3]}    >
  <boxGeometry />
  <meshStandardMaterial  color='#2ef8a0' transparent   wireframe:true />
</mesh>


        </>
    );
    

}