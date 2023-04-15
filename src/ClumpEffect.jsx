import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";


//Position Randomization
const rfs = THREE.MathUtils.randFloatSpread;
//Matrix and Vector for instanced mesh
const mat = new THREE.Matrix4();
const vec = new THREE.Vector3();

const ClumpEffect = () => {

  // Create a reference to the instanced mesh
  // and get access to the api to apply forces to the spheres
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
    collisionResponse: true,
  }));
  useFrame(() => {
    for (let i = 0; i < 50; i++) {
      // Get current positions of the instanced sphere
      ref.current.getMatrixAt(i, mat);
   
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-10)
            .toArray(),
          [0, 0, 0]
        );
    }
  });

  // Animate the scale of the spheres
  return (
    <instancedMesh ref={ref} castShadow receiveShadow args={[null, null, 50]}
      onPointerOver={() => setHovered(true)}
    >
      <sphereGeometry 
        
      />
      <MeshTransmissionMaterial
        /* Transmission, default: 1 */
        transmission={0.99}
        /* Thickness (refraction), default: 0 */
        thickness={0.5}
        /** Backside thickness (when backside is true), default: 0 */
        backsideThickness={0.5}
        /* Roughness (blur), default: 0 */
        roughness={1}
        /* Chromatic aberration, default: 0.03 */
        chromaticAberration={0.5}
        /* Anisotropy, default: 0.1 */
        anisotropy={0.5}
        /* Distortion, default: 0 */
        distortion={0.5}
        /* Distortion scale, default: 0.5 */
        distortionScale={1}
        /* Temporal distortion (speed of movement), default: 0.0 */
        temporalDistortion={0.5}
      />
    </instancedMesh>
  );
};

export default ClumpEffect;
