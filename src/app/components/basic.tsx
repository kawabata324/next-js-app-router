"use client"

import { FC } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export const Basic: FC = () => {
  const gltf = useLoader(GLTFLoader, "/models/cat.gltf")

  return (
    <>
      <group position={[0, 0, 0]}>
        <mesh castShadow position={[0, 0, 0]} scale={0.08} rotation={[-2.2, Math.PI + 0.01, -0.5]}>
          <primitive object={gltf.scene} />
          <meshStandardMaterial />
        </mesh>
      </group>
    </>
  )
}
