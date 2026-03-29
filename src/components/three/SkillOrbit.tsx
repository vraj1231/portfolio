import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import { skills } from '../../data/content'

const ORBIT_RADII = [2.5, 4.0, 5.5]
const ORBIT_SPEEDS = [0.35, 0.22, 0.15]
const ORBIT_TILTS = [0, Math.PI / 8, -Math.PI / 10]

export function SkillOrbit() {
  const groupRef = useRef<THREE.Group>(null)
  const orbitRefs = useRef<THREE.Group[]>([])

  useFrame((state) => {
    skills.forEach((_, i) => {
      if (orbitRefs.current[i]) {
        orbitRefs.current[i].rotation.y = state.clock.elapsedTime * ORBIT_SPEEDS[i]
      }
    })
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  const rings = useMemo(() =>
    skills.map((cat, ci) => ({
      ...cat,
      radius: ORBIT_RADII[ci],
      tilt: ORBIT_TILTS[ci],
    }))
  , [])

  return (
    <group ref={groupRef}>
      {/* Central glowing core */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1.5} />
      </mesh>
      <pointLight color="#00d4ff" intensity={3} distance={8} />

      {rings.map((cat, ci) => (
        <group
          key={cat.name}
          ref={el => { if (el) orbitRefs.current[ci] = el }}
          rotation={[ORBIT_TILTS[ci], 0, 0]}
        >
          {/* Orbit ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[cat.radius, 0.01, 8, 128]} />
            <meshBasicMaterial color={cat.color} transparent opacity={0.2} />
          </mesh>

          {/* Skill text tags */}
          {cat.skills.map((skill, si) => {
            const angle = (si / cat.skills.length) * Math.PI * 2
            const x = Math.cos(angle) * cat.radius
            const z = Math.sin(angle) * cat.radius
            return (
              <Text
                key={skill}
                position={[x, 0, z]}
                fontSize={0.28}
                color={cat.color}
                anchorX="center"
                anchorY="middle"
              >
                {skill}
              </Text>
            )
          })}
        </group>
      ))}

      <ambientLight intensity={0.2} />
    </group>
  )
}
