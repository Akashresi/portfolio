import { Float, Text, Html } from '@react-three/drei'
import { useState } from 'react'
import { motion } from 'framer-motion-3d'

const ProjectCard = ({ position, rotation, title, desc, color, github }) => {
    const [hovered, setHover] = useState(false)

    return (
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <group
                position={position}
                rotation={rotation}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {/* Glass Panel */}
                <mesh scale={hovered ? 1.1 : 1}>
                    <boxGeometry args={[3, 2, 0.1]} />
                    <meshPhysicalMaterial
                        color={color}
                        metalness={0.1}
                        roughness={0.2}
                        transmission={0.5}
                        thickness={0.5}
                        transparent
                        opacity={0.8}
                    />
                </mesh>

                {/* Project Title Text */}
                <Text
                    position={[0, 0.4, 0.06]}
                    fontSize={0.25}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={2.8}
                >
                    {title}
                </Text>

                {/* Tech Stack Text */}
                <Text
                    position={[0, -0.2, 0.06]}
                    fontSize={0.15}
                    color="#cccccc"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={2.6}
                >
                    {desc}
                </Text>

                {/* View Project Button (Visual) */}
                <mesh position={[0, -0.7, 0.06]}>
                    <planeGeometry args={[1.2, 0.3]} />
                    <meshBasicMaterial color={hovered ? "#00ff87" : "#333"} />
                </mesh>
                <Text
                    position={[0, -0.7, 0.07]}
                    fontSize={0.1}
                    color={hovered ? "#000" : "#fff"}
                >
                    VIEW ON GITHUB
                </Text>
            </group>
        </Float>
    )
}

export const Projects3D = () => {
    return (
        <group position={[-3, 0, 0]}>
            <ProjectCard
                position={[0, 2, 0]}
                rotation={[0, 0.2, 0]}
                color="#00d2ff"
                title="AI Chatbot"
                desc="Python | TensorFlow | NLP"
            />
            <ProjectCard
                position={[1.5, -0.5, 1]}
                rotation={[0, -0.2, 0]}
                color="#9d50bb"
                title="E-Commerce Platform"
                desc="React | Node.js | MongoDB"
            />
            <ProjectCard
                position={[-1, -2, -1]}
                rotation={[0, 0.1, 0]}
                color="#00ff87"
                title="Portfolio Website"
                desc="Three.js | R3F | Vite"
            />
        </group>
    )
}
