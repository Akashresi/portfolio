import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Stars, Environment, PerspectiveCamera, useTexture } from '@react-three/drei'
import * as THREE from 'three'

// --- 3D Components ---

const ScrollCamera = () => {
    const { camera } = useThree()

    useFrame(() => {
        // Smoothly interpolate camera position based on scrollY
        // Standard webpage height is approximately document.body.scrollHeight
        // We map scroll pixels to 3D units.
        const scrollY = window.scrollY
        const targetOp = scrollY * 0.01

        // Move camera "down" and "forward" as user scrolls
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, -targetOp, 0.05)
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 10 - targetOp * 0.5, 0.05)
    })
    return null
}

const DigitalGrid = () => {
    // A moving wireframe terrain
    const meshRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        meshRef.current.position.z = (t * 2) % 10 - 20 // Infinite forward movement effect
    })

    return (
        <group rotation={[Math.PI / 2.3, 0, 0]} position={[0, -10, -20]}>
            <mesh ref={meshRef}>
                <planeGeometry args={[100, 100, 40, 40]} />
                <meshBasicMaterial color="#1e293b" wireframe transparent opacity={0.2} />
            </mesh>
            {/* Second grid for density */}
            <mesh position={[0, 0, -0.1]}>
                <planeGeometry args={[100, 100, 10, 10]} />
                <meshBasicMaterial color="#0f172a" transparent opacity={0.5} />
            </mesh>
        </group>
    )
}

const FloatingDataParticles = ({ count = 50 }) => {
    const mesh = useRef()

    // Generate random positions
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 30
            const y = (Math.random() - 0.5) * 50 - 10 // Spread vertically
            const z = (Math.random() - 0.5) * 20 - 5
            const scale = Math.random()
            temp.push({ x, y, z, scale })
        }
        return temp
    }, [count])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        particles.forEach((p, i) => {
            // Subtle floating motion
            const y = p.y + Math.sin(t * 0.5 + i) * 0.5
            const dummy = new THREE.Object3D()
            dummy.position.set(p.x, y, p.z)
            dummy.scale.setScalar(p.scale * 0.1) // Small particles
            dummy.rotation.x = t * 0.2 + i
            dummy.rotation.y = t * 0.3 + i
            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <octahedronGeometry args={[1, 0]} />
            <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.3} />
        </instancedMesh>
    )
}

const HeroCluster = () => {
    const ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.y = t * 0.1
        ref.current.rotation.z = t * 0.05
    })

    return (
        <group ref={ref} position={[3, 2, -5]}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Abstract geometric knot */}
                <mesh>
                    <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                    <meshNormalMaterial transparent opacity={0.1} wireframe />
                </mesh>
                <mesh>
                    <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                    {/* Glassy material look */}
                    <meshPhysicalMaterial
                        color="#38bdf8"
                        roughness={0}
                        metalness={0.5}
                        transmission={0.5}
                        thickness={2}
                    />
                </mesh>
            </Float>
        </group>
    )
}

export const Background3D = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
            <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                <ScrollCamera />

                <color attach="background" args={['#0e0e11']} />
                <fog attach="fog" args={['#0e0e11', 5, 30]} />

                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
                <pointLight position={[-10, -10, 5]} intensity={0.5} color="#c084fc" />

                {/* Scene Elements */}
                <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
                <DigitalGrid />
                <FloatingDataParticles count={100} />
                <HeroCluster />

            </Canvas>
        </div>
    )
}
