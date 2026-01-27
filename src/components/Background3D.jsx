import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial, Instance, Instances } from '@react-three/drei'
import * as THREE from 'three'

// --- 3D Scene Components ---

const CinematicCamera = () => {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        const scrollY = window.scrollY

        // Calculate target position based on scroll
        // Moving deep into the cosmos (negative Z) and slightly down (negative Y)
        const targetZ = 10 - scrollY * 0.02
        const targetY = -scrollY * 0.005

        // Smooth camera flight
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.04)
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04)

        // Subtle mouse parallax (look at mouse position slightly)
        // We look at a point in front of the camera that shifts with mouse
        const lookX = mouse.x * 2
        const lookY = mouse.y * 1

        // Smoothly interpolate the look-at target
        // Current camera rotation is roughly 0,0,0. We just want slight tilt.
        camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, -lookY * 0.05, 0.05)
        camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, -lookX * 0.05, 0.05)
    })

    return null
}

const StarField = ({ count = 2000 }) => {
    const mesh = useRef()

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const x = THREE.MathUtils.randFloatSpread(100)
            const y = THREE.MathUtils.randFloatSpread(100)
            const z = THREE.MathUtils.randFloatSpread(100) - 50 // Spread mostly forward/backward
            const scale = Math.random() * 0.5 + 0.1
            temp.push({ x, y, z, scale })
        }
        return temp
    }, [count])

    useFrame((state) => {
        // Optional: Slow rotation of the entire field
        if (mesh.current) {
            mesh.current.rotation.z = state.clock.getElapsedTime() * 0.02
        }
    })

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
            {particles.map((p, i) => (
                <Dummy key={i} p={p} />
            ))}
        </instancedMesh>
    )
}

const Dummy = ({ p }) => {
    const ref = useRef()
    useFrame(() => {
        if (ref.current) {
            ref.current.position.set(p.x, p.y, p.z)
            ref.current.scale.setScalar(p.scale)
            ref.current.updateMatrix()
        }
    })
    return <object3D ref={ref} />
}

// Abstract Geometric Monuments
const Monuments = () => {
    return (
        <>
            {/* Hero Planet/Orb */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[5, 2, -5]}>
                    <sphereGeometry args={[2, 64, 64]} />
                    <MeshDistortMaterial
                        color="#1e1e24"
                        emissive="#2a2a35"
                        emissiveIntensity={0.2}
                        roughness={0.1}
                        metalness={1}
                        distort={0.3}
                        speed={1}
                    />
                </mesh>
            </Float>

            {/* About Section Shards */}
            <group position={[-5, -5, -20]}>
                <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                    <mesh rotation={[0.5, 0.5, 0]}>
                        <octahedronGeometry args={[3, 0]} />
                        <meshStandardMaterial
                            color="#38bdf8"
                            wireframe
                            transparent
                            opacity={0.1}
                        />
                    </mesh>
                </Float>
                <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                    <mesh position={[2, 1, 1]}>
                        <icosahedronGeometry args={[1, 0]} />
                        <meshStandardMaterial color="#64748b" roughness={0.5} metalness={0.8} />
                    </mesh>
                </Float>
            </group>

            {/* Project Data Streams (Cylinders) */}
            <group position={[8, -10, -35]}>
                {[...Array(5)].map((_, i) => (
                    <Float key={i} speed={0.5 + Math.random()} rotationIntensity={0.5} floatIntensity={0.2}>
                        <mesh position={[Math.random() * 2, i * 4 - 8, Math.random() * 2]} rotation={[0, 0, Math.PI / 4]}>
                            <cylinderGeometry args={[0.05, 0.05, 10, 8]} />
                            <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
                        </mesh>
                    </Float>
                ))}
            </group>

            {/* Contact Portal Ring */}
            <group position={[0, -20, -50]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[8, 0.1, 16, 100]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
                </mesh>
                <pointLight intensity={2} color="#38bdf8" distance={20} />
            </group>
        </>
    )
}

export const Background3D = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
            <Canvas
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping }}
            >
                <CinematicCamera />

                {/* Cinematic Lighting */}
                <color attach="background" args={['#050505']} />
                <fog attach="fog" args={['#050505', 0, 60]} />

                <ambientLight intensity={0.1} />
                {/* Hero Light */}
                <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={1} color="#ffffff" />
                {/* Rim Light */}
                <spotLight position={[-10, 0, -5]} angle={0.5} penumbra={1} intensity={2} color="#38bdf8" />

                {/* Scene Content */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
                <Monuments />

            </Canvas>
        </div>
    )
}
