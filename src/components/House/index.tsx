export const House = () => {
    return (
        <group>
            <mesh position={[0, 1, 2]}>
                <planeBufferGeometry args={[1, 2]} />
                <meshStandardMaterial color="#b85209" polygonOffset polygonOffsetFactor={-1} />
            </mesh>
            <mesh position={[0, 2.5 + 1.5 / 2, 0]} rotation={[0, Math.PI / 4, 0]}>
                <coneBufferGeometry args={[3.5, 1.5, 4]} />
                <meshStandardMaterial color="#f2522e" />
            </mesh>
            <mesh position={[0, 2.5 / 2, 0]}>
                <boxBufferGeometry args={[4, 2.5, 4]} />
                <meshStandardMaterial color="#fa947d" polygonOffset polygonOffsetFactor={1} />
            </mesh>
            <group>
                <mesh position={[1, 0.2, 2.5]}>
                    <sphereBufferGeometry args={[0.5]} />
                    <meshStandardMaterial color="#0c9636" />
                </mesh>
                <mesh position={[0.5, 0.2, 3]}>
                    <sphereBufferGeometry args={[0.3]} />
                    <meshStandardMaterial color="#0c9636" />
                </mesh>
                <mesh position={[-1, 0.2, 2.5]}>
                    <sphereBufferGeometry args={[0.3]} />
                    <meshStandardMaterial color="#0c9636" />
                </mesh>
                <mesh position={[-0.6, 0.1, 2.7]}>
                    <sphereBufferGeometry args={[0.2]} />
                    <meshStandardMaterial color="#0c9636" />
                </mesh>
            </group>
        </group>
    )
}