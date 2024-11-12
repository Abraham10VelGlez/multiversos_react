import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Plane } from "@react-three/drei";

export default function Groundstatic() {
  const texture = useLoader(TextureLoader, "texturesworld/close-up-bright-glitter.jpg"); // Reemplaza con la ruta de tu textura

  return (
    <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <meshStandardMaterial attach="material" map={texture} />
    </Plane>
  );
}