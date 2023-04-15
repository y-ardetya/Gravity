import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from "three";

const Background = () => {
  return (
    <mesh position={[0, 0, -30]} scale={80}>
      <planeGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.DoubleSide} >
        <Depth
          colorB="black"
          colorA="ghostwhite"
          alpha={1}
          mode="normal"
          near={10}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={1000}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
};

export default Background;
