// src/components/canvas/EarthCanvas.jsx
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  // load from public folder: put scene.gltf at public/planet/scene.gltf
  const earth = useGLTF("/planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      // increase scale so it appears large on laptop
      scale={2}
      position={[0, 0, 0]}
      rotation-t={[0]}
    />
  );
};

const EarthCanvas = () => {

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ -4, 3,  6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.9} position={[5, 5, 5]} />
        <Earth />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;