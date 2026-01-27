import { Float } from '@react-three/drei'

export const About3D = () => {
    return (
        <group position={[-2, 0, 0]} rotation={[0, 0.5, 0]}>
            {/* Abstract Lab Representation */}
            <mesh>
                <boxGeometry args={[3, 4, 0.1]} />
                <meshPhysicalMaterial
                    color="#222"
                    metalness={0.8}
                    roughness={0.2}
                    transmission={0.5}
                    thickness={1}
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Holographic Screens */}
            <Float speed={2} floatIntensity={0.5}>
                <mesh position={[0, 0.5, 1]}>
                    <planeGeometry args={[2, 1.2]} />
                    <meshBasicMaterial color="#00d2ff" wireframe opacity={0.3} transparent />
                </mesh>
                <mesh position={[1, -1, 0.5]} rotation={[0, -0.5, 0]}>
                    <planeGeometry args={[1.5, 1]} />
                    <meshBasicMaterial color="#9d50bb" wireframe opacity={0.3} transparent />
                </mesh>
            </Float>
        </group>
    )
}
