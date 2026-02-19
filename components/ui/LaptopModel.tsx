"use client";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

function Laptop() {
  const { scene } = useGLTF("/models/laptop.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.0}
      position={[0, -0.2, 0]}
      rotation={[0, 0.3, 0]}
    />
  );
}

function Scene({ onReady }: { onReady: () => void }) {
  useFrame(() => onReady());
  return null;
}

export default function LaptopModel() {
  const [ready, setReady] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none"
        style={{ opacity: ready ? 0 : 1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-foreground/15 border-t-foreground/50 rounded-full animate-spin" />
          <span className="text-xs text-foreground/30 tracking-widest uppercase">
            Loading
          </span>
        </div>
      </div>

      <div
        className="w-full h-full transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0 }}
      >
        <Canvas
          camera={{ position: [0, 1.5, 5], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
          frameloop="always"
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} />
          <directionalLight
            position={[-3, 2, -3]}
            intensity={0.3}
            color="#6688ff"
          />
          <pointLight position={[0, 2, 2]} intensity={0.5} />

          <Suspense fallback={null}>
            <Laptop />
            <ContactShadows
              position={[0, -1.4, 0]}
              opacity={0.25}
              scale={6}
              blur={2.5}
              far={2}
            />
            <Environment preset="city" />
            <Scene onReady={() => !ready && setReady(true)} />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload("/models/laptop.glb");
