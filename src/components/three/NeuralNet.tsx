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
  const pointsRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { size } = useThree()

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

  // Static line geometry (initial connections — kept static for performance)
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

  // Points geometry for animated nodes
  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(NODE_COUNT * 3)
    nodes.forEach((node, i) => {
      positions[i * 3] = node.position.x
      positions[i * 3 + 1] = node.position.y
      positions[i * 3 + 2] = node.position.z
    })
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [nodes, NODE_COUNT])

  useEffect(() => {
    return () => {
      lineGeometry.dispose()
      pointsGeometry.dispose()
    }
  }, [lineGeometry, pointsGeometry])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = t * 0.04 + mouseRef.current.x * 0.08
    groupRef.current.rotation.x = mouseRef.current.y * 0.04

    // Animate nodes and update Points geometry
    const positions = pointsGeometry.attributes.position.array as Float32Array
    nodes.forEach((node, i) => {
      node.position.add(node.velocity)
      if (Math.abs(node.position.x) > 7) node.velocity.x *= -1
      if (Math.abs(node.position.y) > 4.5) node.velocity.y *= -1
      if (Math.abs(node.position.z) > 3) node.velocity.z *= -1
      positions[i * 3] = node.position.x
      positions[i * 3 + 1] = node.position.y
      positions[i * 3 + 2] = node.position.z
    })
    pointsGeometry.attributes.position.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.12} />
      </lineSegments>
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial color="#00d4ff" size={0.08} sizeAttenuation transparent opacity={0.9} />
      </points>
      <ambientLight intensity={0.3} />
    </group>
  )
}
