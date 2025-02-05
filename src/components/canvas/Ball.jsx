import React, {Suspense, useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'; 
import CanvasLoader from '../Loader';


const Ball = (props) => {
const [decal] = useTexture([props.imgUrl]);
const meshRef = useRef(); // Create a reference for the mesh

  // Rotate the ball on every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotate around the Y-axis
      meshRef.current.rotation.x += 0.005; // Rotate slightly around the X-axis

      // Floating motion using sine wave
      time.current += 0.08; // Controls the speed of floating
      meshRef.current.position.y = Math.sin(time.current) * 0.7; // Smooth floating effect
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float> 
  );
};


const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;