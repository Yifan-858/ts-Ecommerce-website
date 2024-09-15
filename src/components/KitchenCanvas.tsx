import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Group, AnimationClip } from "three";

type GLTFResult = {
  scene: Group;
  animations: AnimationClip[];
};

type KitchenCanvasProps = {
  modelPath: string;
};

const Kitchen = ({ modelPath }: KitchenCanvasProps) => {
  const kitchenModel = useLoader(GLTFLoader, modelPath) as GLTFResult;
  return (
    <>
      <ambientLight intensity={3} color="#fff" />
      {/* <pointLight intensity={50} position={[5, 5, 5]} color="yellow" />
      <pointLight intensity={50} position={[-5, 5, 5]} color="white" /> */}
      {/* {/* <rectAreaLight
        intensity={50}
        color="#fff"
        width={20}
        height={30}
        position={[50, 15, 10]}
      /> */}
      <rectAreaLight
        intensity={50}
        color="#fff"
        width={20}
        height={30}
        position={[20, 30, 50]}
      />

      <primitive object={kitchenModel.scene} scale={20} />
    </>
  );
};

export const KitchenCanvas = ({ modelPath }: KitchenCanvasProps) => {
  return (
    <div
      className="kitchen-canvas kitchen-canvas-01"
      style={{ width: "150px", height: "300px" }}
    >
      <Canvas
        camera={{ fov: 1, near: 0.1, far: 1000, position: [200, 400, 0] }}
      >
        <Suspense fallback={null}>
          <Kitchen modelPath={modelPath} />
          <OrbitControls
            // autoRotate
            // autoRotateSpeed={1}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
