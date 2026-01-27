import { Float, Text, MeshDistortMaterial } from '@react-three/drei'

export const Hero3D = () => {
    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Futuristic Avatar Representation */}
                <group position={[2, -1, 0]} rotation={[0, -0.5, 0]}>
                    {/* Head */}
                    <mesh position={[0, 1.5, 0]}>
                        <icosahedronGeometry args={[0.3, 1]} />
                        <meshStandardMaterial color="#00d2ff" roughness={0.3} metalness={0.8} />
                    </mesh>
                    {/* Glowing Eyes */}
                    <mesh position={[0.15, 1.55, 0.2]}>
                        <sphereGeometry args={[0.05]} />
                        <meshBasicMaterial color="#ffffff" />
                    </mesh>

                    {/* Body */}
                    <mesh position={[0, 0.8, 0]}>
                        <cylinderGeometry args={[0.1, 0.3, 1.2, 8]} />
                        <MeshDistortMaterial color="#1a1a2e" speed={2} distort={0.4} />
                    </mesh>

                    {/* Floating Tech Rings around */}
                    <mesh position={[0, 0.8, 0]}>
                        <torusGeometry args={[0.6, 0.02, 16, 32]} />
                        <meshBasicMaterial color="#3a7bd5" transparent opacity={0.5} />
                    </mesh>
                    <mesh position={[0, 0.8, 0]} rotation={[0.5, 0, 0]}>
                        <torusGeometry args={[0.8, 0.02, 16, 32]} />
                        <meshBasicMaterial color="#9d50bb" transparent opacity={0.3} />
                    </mesh>
                </group>
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
