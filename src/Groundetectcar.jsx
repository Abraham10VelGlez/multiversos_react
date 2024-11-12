import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";
import { Plane } from "@react-three/drei";

export default function Groundetectcar({ carRef }) {
  const planeRef = useRef();

  useFrame(() => {
    if (carRef.current && planeRef.current) {
      // Haz que el piso se "teletransporte" bajo el auto cuando se aleja mucho del centro
      const distance = carRef.current.position.distanceTo(planeRef.current.position);
      if (distance > 50) {
        planeRef.current.position.set(carRef.current.position.x, -0.5, carRef.current.position.z);
      }
    }
  });

  return (
    <Plane ref={planeRef} args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <meshStandardMaterial color="gray" />
    </Plane>
  );
}
