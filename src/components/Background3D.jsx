import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, Stars } from '@react-three/drei'

const FloatingShape = ({ position, color, speed, distort }) => {
    const ref = useRef()
    // Subtle rotation
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.x = t * 0.1 * speed
        ref.current.rotation.y = t * 0.15 * speed
    })

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.8}>
            <mesh ref={ref} position={position}>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial
                    color={color}
                    speed={speed * 2}
                    distort={distort}
                    roughness={0.4}
                    metalness={0.1}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    )
}

export const Background3D = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 40 }} gl={{ alpha: true, antialias: true }}>
                <fog attach="fog" args={['#0e0e11', 5, 20]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={0.5} color="#38bdf8" />

                {/* Distant ambient shapes */}
                <FloatingShape position={[-4, 2, -5]} color="#38bdf8" speed={1.5} distort={0.4} />
                <FloatingShape position={[4, -3, -4]} color="#64748b" speed={1.2} distort={0.5} />
                <FloatingShape position={[0, 4, -8]} color="#1e293b" speed={0.8} distort={0.3} />

                {/* Very subtle background particles */}
                <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    )
}
