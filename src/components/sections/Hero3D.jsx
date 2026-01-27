import { Float, Text, MeshDistortMaterial } from '@react-three/drei'

export const Hero3D = () => {
    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Placeholder for 3D Avatar */}
                <mesh position={[2, 0, 0]} scale={1.5}>
                    <capsuleGeometry args={[0.5, 1.5, 4, 8]} />
                    <MeshDistortMaterial color="#00d2ff" speed={2} distort={0.3} roughness={0.2} metalness={0.8} />
                </mesh>
            </Float>

            {/* Floating Code Snippets decor */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5} position={[-2, 1, -2]}>
                <mesh>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color="#3a7bd5" wireframe />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5} position={[2, -1, -2]}>
                <mesh>
                    <octahedronGeometry args={[0.6]} />
                    <meshStandardMaterial color="#9d50bb" wireframe />
                </mesh>
            </Float>

            <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.5} position={[3, 2, -1]}>
                <Text
                    fontSize={0.3}
                    color="#00d2ff"
                    maxWidth={2}
                    textAlign="center"
                    anchorX="center"
                    anchorY="middle"
                >
                    {"const future = true;"}
                </Text>
            </Float>

            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} position={[-3, -1, -1]}>
                <Text
                    fontSize={0.3}
                    color="#00d2ff"
                    maxWidth={2}
                    textAlign="center"
                    anchorX="center"
                    anchorY="middle"
                >
                    {"while(alive) { learn(); }"}
                </Text>
            </Float>
        </group>
    )
}
