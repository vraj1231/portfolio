// src/components/three/NeuralNet.tsx
import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const CONNECTION_DISTANCE = 2.8

interface Node {
  position: THREE.Vector3
  velocity: THREE.Vector3
}

export function NeuralNet() {
  const groupRef = useRef<THREE.Group>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { size } = useThree()

  // Determine node count: fewer on mobile for performance
  const NODE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 80

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / size.width) * 2 - 1,
        y: -(e.clientY / size.height) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [size])

  const nodes: Node[] = useMemo(() =>
    Array.from({ length: NODE_COUNT }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 6
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.004,
        (Math.random() - 0.5) * 0.004,
        (Math.random() - 0.5) * 0.004
      ),
    }))
  , [NODE_COUNT])

  const lineGeometry = useMemo(() => {
    const points: number[] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < CONNECTION_DISTANCE) {
          const a = nodes[i].position
          const b = nodes[j].position
          points.push(a.x, a.y, a.z, b.x, b.y, b.z)
        }
      }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
    return geo
  }, [nodes])

  const nodePositions = useMemo(() =>
    nodes.map(n => n.position.toArray() as [number, number, number])
  , [nodes])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = t * 0.04 + mouseRef.current.x * 0.08
    groupRef.current.rotation.x = mouseRef.current.y * 0.04

    // Animate nodes (bounce off bounds)
    nodes.forEach(node => {
      node.position.add(node.velocity)
      if (Math.abs(node.position.x) > 7) node.velocity.x *= -1
      if (Math.abs(node.position.y) > 4.5) node.velocity.y *= -1
      if (Math.abs(node.position.z) > 3) node.velocity.z *= -1
    })
  })

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.12} />
      </lineSegments>
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshBasicMaterial color={i % 5 === 0 ? '#a855f7' : '#00d4ff'} />
        </mesh>
      ))}
      <ambientLight intensity={0.3} />
    </group>
  )
}
