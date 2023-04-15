import { Canvas, useThree } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Text } from "@react-three/drei";
import ClumpEffect from "./ClumpEffect";
import Cursor from "./Cursor";
import Overlay from "./Overlay";
import Background from "./Background";
import Rig from "./Rig";
import { Suspense } from "react";

const App = () => (
  <>
    <Suspense fallback={null}>
      <Overlay />
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 100 }}
      >
        <Background />
        <Rig />

        <ambientLight intensity={0.9} />
        <spotLight
          intensity={1}
          angle={0.2}
          penumbra={1}
          position={[30, 30, 30]}
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <Physics gravity={[0, -2, 0]} iterations={15}>
          <Experience />
        </Physics>
      </Canvas>
    </Suspense>
  </>
);

const Experience = () => {
  const { width } = useThree((state) => state.viewport);

  return (
    <>
      <Cursor />
      <ClumpEffect />
      <Text
        anchorX="center"
        anchorY="middle"
        color="#B5E3E3"
        font="/ConcertOne-Regular.ttf"
        fontSize={width / 10}
      >
        YOHANE
      </Text>
    </>
  );
};

export default App;
