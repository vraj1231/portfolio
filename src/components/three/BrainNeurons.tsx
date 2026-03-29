import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 110
const MAX_DIST = 4.2
const PULSE_COUNT = 35

export function BrainNeurons() {
  const groupRef = useRef<THREE.Group>(null)
  const pulseRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const { nodePositions, lineGeo, nodeGeo, pulseData } = useMemo(() => {
    // Scatter nodes in a brain-like ellipsoid
    const nodePositions: THREE.Vector3[] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3.5 + Math.random() * 4
      nodePositions.push(new THREE.Vector3(
        r * 1.4 * Math.sin(phi) * Math.cos(theta),
        r * 0.85 * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      ))
    }

    // Build connections
    const linePoints: number[] = []
    const connectionList: { from: number; to: number }[] = []
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const d = nodePositions[i].distanceTo(nodePositions[j])
        if (d < MAX_DIST) {
          const a = nodePositions[i]
          const b = nodePositions[j]
          linePoints.push(a.x, a.y, a.z, b.x, b.y, b.z)
          connectionList.push({ from: i, to: j })
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3))

    // Nodes geometry
    const pos = new Float32Array(NODE_COUNT * 3)
    nodePositions.forEach((p, i) => {
      pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z
    })
    const nodeGeo = new THREE.BufferGeometry()
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))

    // Pick random connections for traveling pulses
    const shuffled = [...connectionList].sort(() => Math.random() - 0.5)
    const pulseData = shuffled.slice(0, PULSE_COUNT).map(conn => ({
      ...conn,
      t: Math.random(),
      speed: 0.15 + Math.random() * 0.55,
    }))

    return { nodePositions, lineGeo, nodeGeo, pulseData }
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.035
      groupRef.current.rotation.x = Math.sin(t * 0.018) * 0.08
    }

    if (pulseRef.current) {
      pulseData.forEach((pulse, i) => {
        pulse.t = (pulse.t + pulse.speed * 0.004) % 1
        dummy.position.lerpVectors(
          nodePositions[pulse.from],
          nodePositions[pulse.to],
          pulse.t
        )
        dummy.updateMatrix()
        pulseRef.current!.setMatrixAt(i, dummy.matrix)
      })
      pulseRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef}>
      {/* Axon connections */}
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.10} />
      </lineSegments>

      {/* Neuron soma (nodes) */}
      <points geometry={nodeGeo}>
        <pointsMaterial
          color="#00d4ff"
          size={0.10}
          sizeAttenuation
          transparent
          opacity={0.75}
        />
      </points>

      {/* Traveling pulse signals */}
      <instancedMesh ref={pulseRef} args={[undefined, undefined, PULSE_COUNT]}>
        <sphereGeometry args={[0.07, 6, 6]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.95} />
      </instancedMesh>

      <ambientLight intensity={0.2} />
    </group>
  )
}
