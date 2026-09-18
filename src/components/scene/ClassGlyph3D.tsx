import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import type { Filiere } from '../../data/filieres'

interface GlyphMeshProps {
  filiere: Filiere
}

function GlyphMesh({ filiere }: GlyphMeshProps) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y += delta * 0.3
    mesh.current.rotation.x += delta * 0.08
  })

  if (filiere === 'Mode') {
    return (
      <mesh ref={mesh} castShadow>
        <sphereGeometry args={[1.05, 48, 48]} />
        <meshPhysicalMaterial
          color="#efe4d8"
          roughness={0.25}
          metalness={0.05}
          clearcoat={0.5}
        />
      </mesh>
    )
  }

  if (filiere === 'Agora') {
    return (
      <mesh ref={mesh} castShadow>
        <torusGeometry args={[0.95, 0.34, 24, 64]} />
        <meshStandardMaterial color="#52735f" roughness={0.45} metalness={0.15} />
      </mesh>
    )
  }

  return (
    <mesh ref={mesh} castShadow>
      <icosahedronGeometry args={[1.1, 0]} />
      <meshStandardMaterial color="#6b7686" roughness={0.4} metalness={0.35} flatShading />
    </mesh>
  )
}

interface ClassGlyph3DProps {
  filiere: Filiere
}

function ClassGlyph3D({ filiere }: ClassGlyph3DProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.4], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 3, 2]} intensity={1.2} />
      <directionalLight position={[-2, 1, 1]} intensity={0.5} />
      <pointLight position={[-2, -1, -1]} intensity={0.3} color="#b55a34" />
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.1}>
        <GlyphMesh filiere={filiere} />
      </Float>
    </Canvas>
  )
}

export default ClassGlyph3D
