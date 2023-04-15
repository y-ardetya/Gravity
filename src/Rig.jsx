import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Rig = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 20),
      0.05
    );
  });
};

export default Rig;
