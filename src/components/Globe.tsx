import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function EarthSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <meshStandardMaterial>
        <primitive
          attach="map"
          object={(() => {
            const canvas = document.createElement('canvas');
            canvas.width = 2048;
            canvas.height = 1024;
            const ctx = canvas.getContext('2d')!;
            
            // Draw ocean (blue)
            ctx.fillStyle = '#0B3D91';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw continents (green) - simplified shapes
            ctx.fillStyle = '#22C55E';
            
            // North America
            ctx.beginPath();
            ctx.ellipse(300, 300, 150, 200, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // South America
            ctx.beginPath();
            ctx.ellipse(400, 600, 100, 180, 0.3, 0, Math.PI * 2);
            ctx.fill();
            
            // Europe
            ctx.beginPath();
            ctx.ellipse(1024, 250, 120, 100, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Africa
            ctx.beginPath();
            ctx.ellipse(1100, 500, 140, 200, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Asia
            ctx.beginPath();
            ctx.ellipse(1500, 300, 250, 180, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Australia
            ctx.beginPath();
            ctx.ellipse(1650, 700, 120, 90, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Antarctica (bottom)
            ctx.fillRect(0, 900, canvas.width, 124);
            
            const texture = new THREE.CanvasTexture(canvas);
            texture.needsUpdate = true;
            return texture;
          })()}
        />
      </meshStandardMaterial>
    </Sphere>
  );
}

export default function Globe() {
  return (
    <div className="w-80 h-80 animate-float">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <EarthSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
