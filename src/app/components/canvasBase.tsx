"use client"

import { StrictMode } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Basic } from "@/app/components/basic"
import { OrbitControls } from "@react-three/drei"
import { Perf } from "r3f-perf"

export const CanvasBase = () => {
  return (
    <div className="w-full h-screen">
      <StrictMode>
        <Canvas
          flat
          shadows
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding,
          }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [0, 0, 4],
          }}
        >
          {process.env.NODE_ENV === "development" && <OrbitControls />}
          {/* モニター */}
          {process.env.NODE_ENV === "development" && <Perf position="top-left" />}

          {/* 背景 */}
          <color args={["black"]} attach={"background"} />

          {/* 環境光 */}
          <ambientLight intensity={0.5} />

          {/* 平行光 */}
          <directionalLight
            castShadow
            position={[2, -5, 4]}
            intensity={0.5}
            shadow-mapSize={[1024, 1024]}
            color="rgb(241, 72, 251)"
          />
          <Basic />
        </Canvas>
      </StrictMode>
    </div>
  )
}
