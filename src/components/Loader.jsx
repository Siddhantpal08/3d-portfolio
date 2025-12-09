import { Html, useProgress } from "@react-three/drei";

// ✅ CORRECT - This will work inside a <Canvas>
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div' // Renders a div
      center  // Centers the loader on the screen
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;