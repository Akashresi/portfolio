import { useScroll, Stars, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { Hero3D } from './sections/Hero3D'
import { About3D } from './sections/About3D'
import { Skills3D } from './sections/Skills3D'
import { Projects3D } from './sections/Projects3D'

export const Experience = () => {
    const scroll = useScroll()

    useFrame((state, delta) => {
        // Scroll offset is 0 to 1
        // Total distance to travel = 50 units
        const targetZ = -scroll.offset * 50
        // Smooth damp camera Z
        state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, targetZ + 5, 4, delta)

        // Optional: look slightly towards the mouse or travel path
    })

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* SECTION 1: HERO (Z=0) */}
            <group position={[0, 0, 0]}>
                <Hero3D />
            </group>

            {/* SECTION 2: ABOUT (Z=-10) */}
            <group position={[0, -2, -10]}>
                <About3D />
            </group>

            {/* SECTION 3: SKILLS (Z=-20) */}
            <group position={[0, 0, -20]}>
                <Skills3D />
            </group>

            {/* SECTION 4: PROJECTS (Z=-30) */}
            <group position={[0, 0, -30]}>
                <Projects3D />
            </group>

            {/* SECTION 5: ACHIEVEMENTS (Z=-40) */}
            <group position={[0, -1, -40]}>
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={[-2, 2, 0]} rotation={[0.5, 0.5, 0]}>
                        <torusKnotGeometry args={[0.5, 0.2, 100, 16]} />
                        <meshStandardMaterial color="#ffd700" roughness={0.1} metalness={0.8} />
                    </mesh>
                </Float>
                <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={[2, 0, -2]} rotation={[-0.5, -0.5, 0]}>
                        <octahedronGeometry args={[1, 0]} />
                        <meshStandardMaterial color="#c0c0c0" roughness={0.1} metalness={0.9} />
                    </mesh>
                </Float>
            </group>

            {/* SECTION 6: CONTACT (Z=-50) */}
            <group position={[0, 0, -50]}>
                <Float speed={2} rotationIntensity={0.5}>
                    <mesh>
                        <icosahedronGeometry args={[2, 1]} />
                        <meshStandardMaterial color="#00ff87" wireframe emissive="#00ff87" emissiveIntensity={0.2} />
                    </mesh>
                </Float>
            </group>

            {/* Decorative Particles along the path */}
            {/* Could add Sparkles here */}
        </>
    )
}
