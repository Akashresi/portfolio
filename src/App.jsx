import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { Experience } from './components/Experience'
import { Interface } from './components/Interface'
import { Suspense } from 'react'
import './App.css'

function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 30,
        }}
      >
        <color attach="background" args={['#050510']} />
        <Suspense fallback={null}>
          <ScrollControls pages={6} damping={0.3}>
            {/* 3D Content moves with scroll */}
            <Experience />
            
            {/* HTML Overlay moves with scroll */}
            <Scroll html style={{ width: '100%', height: '100%' }}>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
