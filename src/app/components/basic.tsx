"use client"

import { FC, useRef } from "react"
import { OrbitControls, useGLTF, useHelper, Caustics } from "@react-three/drei"
import * as THREE from "three"
import { Perf } from "r3f-perf"
import { useFrame, useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"

export const Basic: FC = () => {
  const boxRef = useRef<THREE.Mesh>(null)
  const directionalLight = useRef<THREE.DirectionalLight>(null)
  const catRef = useRef<THREE.Group>(null)
  const obj = useLoader(OBJLoader, "/models/cat.obj")
  const gltf = useGLTF("https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/bunny/model.gltf")

  useHelper(directionalLight as React.MutableRefObject<THREE.DirectionalLight>, THREE.DirectionalLightHelper, 1, "red")

  useFrame((state, delta) => {
    // 経過時間
    if (boxRef.current) {
      // y回転
      boxRef.current.rotation.y += delta
    }
  })

  return (
    <>
      <OrbitControls />
      {/* モニター */}
      <Perf position="top-left" />

      {/* 背景 */}
      <color args={["black"]} attach={"background"} />

      {/* 環境光 */}
      <ambientLight intensity={0.5} />

      {/* 平行光 */}
      <directionalLight
        castShadow
        ref={directionalLight}
        position={[2, -5, 4]}
        intensity={0.5}
        shadow-mapSize={[1024, 1024]}
        color="hotpink"
      />

      <group position={[0, 0, 0]}>
        <mesh castShadow position={[0, 1, -1]} scale={0.2} rotation={[-2.2, Math.PI + 0.01, 0]}>
          <primitive object={obj} ref={catRef} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        <mesh castShadow position={[-2, -1, -1]} geometry={gltf?.nodes.bunny.geometry} scale={0.5} />
      </group>
    </>
  )
}
