import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function DataSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current || !ringRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.8
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.5
    ringRef.current.rotation.x = Math.PI / 3
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.1, 0.04, 8, 64]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.7} />
      </mesh>
      <pointLight color="#00d4ff" intensity={2} distance={5} />
    </group>
  )
}
