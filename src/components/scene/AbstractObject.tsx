import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const CORE_COLOR = '#efe9df'
const RING_COLOR = '#16161a'
const ACCENT_COLOR = '#b55a34'

function AbstractObject() {
  const group = useRef<THREE.Group>(null)
  const core = useRef<THREE.Mesh>(null)
  const ringOuter = useRef<THREE.Mesh>(null)
  const ringInner = useRef<THREE.Mesh>(null)
  const target = useRef({ x: 0, y: 0 })

  const pointer = useThree((state) => state.pointer)

  useFrame((_, delta) => {
    target.current.x = pointer.y * 0.5
    target.current.y = pointer.x * 0.6

    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        target.current.x,
        0.04,
      )
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        target.current.y,
        0.04,
      )
    }

    if (core.current) {
      core.current.rotation.y += delta * 0.18
      core.current.rotation.x += delta * 0.06
    }

    if (ringOuter.current) {
      ringOuter.current.rotation.z += delta * 0.12
    }

    if (ringInner.current) {
      ringInner.current.rotation.z -= delta * 0.16
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
        <mesh ref={core} castShadow receiveShadow>
          <icosahedronGeometry args={[1.15, 8]} />
          <MeshDistortMaterial
            color={CORE_COLOR}
            distort={0.32}
            speed={1.6}
            roughness={0.15}
            metalness={0.1}
            clearcoat={0.6}
            clearcoatRoughness={0.2}
          />
        </mesh>

        <mesh ref={ringOuter} rotation={[Math.PI / 2.4, 0, 0]} castShadow>
          <torusGeometry args={[1.85, 0.012, 16, 120]} />
          <meshStandardMaterial color={RING_COLOR} roughness={0.4} metalness={0.6} />
        </mesh>

        <mesh ref={ringInner} rotation={[Math.PI / 3.1, 0.4, 0]}>
          <torusGeometry args={[1.55, 0.008, 16, 120]} />
          <meshStandardMaterial color={ACCENT_COLOR} roughness={0.35} metalness={0.4} />
        </mesh>
      </Float>
    </group>
  )
}

export default AbstractObject
