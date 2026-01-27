import { Float, Sphere } from '@react-three/drei'

const SkillOrb = ({ position, color }) => {
    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[0.6, 32, 32]} position={position}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    )
}

export const Skills3D = () => {
    return (
        <group position={[2, 0, 0]}>
            <SkillOrb position={[-2, 2, 0]} color="#f06529" /> {/* HTML Orange */}
            <SkillOrb position={[0, 1.5, -2]} color="#2965f1" /> {/* CSS Blue */}
            <SkillOrb position={[2, 2, 0]} color="#f7df1e" /> {/* JS Yellow */}
            <SkillOrb position={[-1, -0.5, 1]} color="#61dbfb" /> {/* React Cyan */}
            <SkillOrb position={[1, -1, 1]} color="#68a063" /> {/* Node Green */}

            {/* Connecting lines or constellation effect could be added here */}
        </group>
    )
}
