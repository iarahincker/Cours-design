import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import type { Filiere } from '../../data/filieres'

interface GlyphMeshProps {
  filiere: Filiere
}

function MaintenanceGlyph() {
  const group = useRef<THREE.Group>(null)
  const rim = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.22
    if (rim.current) rim.current.rotation.z -= delta * 0.35
  })

  const bolts = Array.from({ length: 6 }).map((_, i) => {
    const angle = (i / 6) * Math.PI * 2
    return (
      <mesh key={i} position={[Math.cos(angle) * 1.15, Math.sin(angle) * 1.15, 0]} castShadow>
        <boxGeometry args={[0.16, 0.16, 0.16]} />
        <meshStandardMaterial color="#2f333a" roughness={0.4} metalness={0.5} />
      </mesh>
    )
  })

  return (
    <group ref={group}>
      <mesh castShadow>
        <icosahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial color="#7b8894" roughness={0.35} metalness={0.4} flatShading />
      </mesh>
      <mesh ref={rim} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[1.15, 0.07, 16, 48]} />
        <meshStandardMaterial color="#454c54" roughness={0.3} metalness={0.55} />
      </mesh>
      {bolts}
    </group>
  )
}

function ModeGlyph() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y += delta * 0.18
    mesh.current.rotation.z += delta * 0.05
  })

  return (
    <mesh ref={mesh} rotation={[0.35, 0, 0.12]} castShadow>
      <planeGeometry args={[1.9, 1.9, 48, 48]} />
      <MeshDistortMaterial
        color="#d9c3ba"
        distort={0.42}
        speed={1.8}
        roughness={0.3}
        metalness={0.05}
        clearcoat={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function AgoraGlyph() {
  const group = useRef<THREE.Group>(null)
  const orbitA = useRef<THREE.Mesh>(null)
  const orbitB = useRef<THREE.Mesh>(null)
  const t = useRef(0)

  useFrame((_, delta) => {
    t.current += delta
    if (group.current) group.current.rotation.y += delta * 0.14
    if (orbitA.current) {
      orbitA.current.position.set(Math.cos(t.current * 0.6) * 1.1, Math.sin(t.current * 0.6) * 0.4, Math.sin(t.current * 0.6) * 0.6)
    }
    if (orbitB.current) {
      orbitB.current.position.set(
        Math.cos(t.current * 0.4 + Math.PI) * 0.95,
        Math.sin(t.current * 0.4 + Math.PI) * 0.5,
        Math.cos(t.current * 0.4) * 0.4,
      )
    }
  })

  return (
    <group ref={group}>
      <mesh castShadow>
        <icosahedronGeometry args={[0.58, 0]} />
        <meshStandardMaterial color="#5f6f66" roughness={0.4} metalness={0.15} />
      </mesh>
      <mesh ref={orbitA} castShadow>
        <tetrahedronGeometry args={[0.34, 0]} />
        <meshStandardMaterial color="#93a099" roughness={0.5} metalness={0.1} />
      </mesh>
      <mesh ref={orbitB} castShadow>
        <boxGeometry args={[0.32, 0.32, 0.32]} />
        <meshStandardMaterial color="#414f47" roughness={0.4} metalness={0.2} />
      </mesh>
    </group>
  )
}

function PrepaMetiersGlyph() {
  const group = useRef<THREE.Group>(null)
  const core = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.2
    if (core.current) core.current.rotation.x += delta * 0.3
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#8b899c" wireframe />
      </mesh>
      <mesh ref={core} castShadow>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#9b96ab" roughness={0.4} metalness={0.2} />
      </mesh>
    </group>
  )
}

function EsfGlyph() {
  const group = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.2
  })

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2.3, 0, 0]} castShadow>
        <torusGeometry args={[0.82, 0.26, 24, 48]} />
        <meshStandardMaterial color="#8a7568" roughness={0.5} metalness={0.1} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2.3, Math.PI / 6]} castShadow>
        <torusGeometry args={[0.64, 0.2, 24, 48]} />
        <meshStandardMaterial color="#b17a5c" roughness={0.4} metalness={0.15} />
      </mesh>
    </group>
  )
}

function GlyphMesh({ filiere }: GlyphMeshProps) {
  if (filiere === 'Mode') return <ModeGlyph />
  if (filiere === 'Agora') return <AgoraGlyph />
  if (filiere === '3PM') return <PrepaMetiersGlyph />
  if (filiere === 'BTS ESF') return <EsfGlyph />
  return <MaintenanceGlyph />
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
      <pointLight position={[-2, -1, -1]} intensity={0.3} color="#c2977e" />
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.1}>
        <GlyphMesh filiere={filiere} />
      </Float>
    </Canvas>
  )
}

export default ClassGlyph3D
