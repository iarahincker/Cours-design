import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, Lightformer } from '@react-three/drei'
import { PCFShadowMap } from 'three'
import AbstractObject from './AbstractObject'

function Scene() {
  return (
    <Canvas
      shadows={{ type: PCFShadowMap }}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.3, 5.2], fov: 38 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={['#f6f4f0']} />
      <fog attach="fog" args={['#f6f4f0', 8, 14]} />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[3, 4, 3]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0005}
      >
        <orthographicCamera attach="shadow-camera" args={[-3, 3, 3, -3, 0.1, 12]} />
      </directionalLight>
      <pointLight position={[-3, -1.5, -2]} intensity={0.4} color="#b55a34" />

      <Suspense fallback={null}>
        <AbstractObject />

        <Environment resolution={256}>
          <group rotation={[0, Math.PI / 2, 0]}>
            <Lightformer
              form="rect"
              intensity={2}
              position={[0, 3, -2]}
              scale={[6, 3, 1]}
              color="#ffffff"
            />
            <Lightformer
              form="rect"
              intensity={1.2}
              position={[-4, 1, 2]}
              scale={[3, 2, 1]}
              color="#f4ece1"
            />
            <Lightformer
              form="rect"
              intensity={1.4}
              position={[4, -1, 2]}
              scale={[3, 2, 1]}
              color="#ffffff"
            />
          </group>
        </Environment>

        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.35}
          scale={8}
          blur={2.4}
          far={3}
          resolution={512}
          color="#16161a"
        />
      </Suspense>
    </Canvas>
  )
}

export default Scene
