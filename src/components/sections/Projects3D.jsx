import { Float } from '@react-three/drei'
import { useState } from 'react'
// import { motion } from 'framer-motion-3d'

const ProjectCard = ({ position, color, rotation }) => {
    const [hovered, setHover] = useState(false)

    return (
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh
                position={position}
                rotation={rotation}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.1 : 1}
            >
                <boxGeometry args={[3, 2, 0.1]} />
                <meshStandardMaterial color={hovered ? '#00d2ff' : color} roughness={0.3} metalness={0.5} />
            </mesh>
        </Float>
    )
}

export const Projects3D = () => {
    return (
        <group position={[-3, 0, 0]}>
            <ProjectCard position={[0, 2, 0]} rotation={[0, 0.2, 0]} color="#1a1a2e" />
            <ProjectCard position={[1.5, -0.5, 1]} rotation={[0, -0.2, 0]} color="#16213e" />
            <ProjectCard position={[-1, -2, -1]} rotation={[0, 0.1, 0]} color="#0f3460" />
        </group>
    )
}
