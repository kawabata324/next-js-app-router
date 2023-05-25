"use client"

import { StrictMode } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Basic } from "@/app/components/basic"

export const Main = () => {
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
          <Basic />
        </Canvas>
      </StrictMode>
    </div>
  )
}
