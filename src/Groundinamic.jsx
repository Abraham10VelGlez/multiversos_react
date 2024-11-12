import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";
import { Plane } from "@react-three/drei";

export default function Groundinamic() {
  const texture = useLoader(TextureLoader, "texturesworld/close-up-bright-glitter.jpg"); // Usa una textura repetitiva de suelo
  const planeRef = useRef();

  // Configuramos la textura para que se repita
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(10, 10); // Ajusta según tus necesidades

  // Desplazamos la textura en cada frame para crear la ilusión de movimiento
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    texture.offset.y = time * 0.9; // Ajusta la velocidad del desplazamiento
  });

  return (
    <Plane
      ref={planeRef}
      args={[100, 100]} // Dimensiones del plano grande
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
    >
      <meshStandardMaterial attach="material" map={texture} />
    </Plane>
  );
}
