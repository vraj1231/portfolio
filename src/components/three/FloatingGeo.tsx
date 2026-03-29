import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function FloatingGeo() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.25
      outerRef.current.rotation.y = t * 0.40
      outerRef.current.position.y = Math.sin(t * 0.7) * 0.12
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.35
      innerRef.current.rotation.z = t * 0.20
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.15
      ringRef.current.rotation.y = -t * 0.30
    }
  })

  return (
    <group>
      {/* Outer wireframe icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial color="#00d4ff" wireframe transparent opacity={0.85} />
      </mesh>

      {/* Inner solid icosahedron */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#a855f7"
          transparent
          opacity={0.55}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Orbiting ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.9, 0.025, 8, 80]} />
        <meshStandardMaterial color="#a855f7" transparent opacity={0.90} />
      </mesh>

      <pointLight position={[3, 3, 3]} color="#00d4ff" intensity={8} />
      <pointLight position={[-3, -2, -2]} color="#a855f7" intensity={6} />
      <ambientLight intensity={0.6} />
    </group>
  )
}
