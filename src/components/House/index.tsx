export const House = () => {
    return (
        <mesh position={[0, 2.5 / 2, 0]}>
            <boxBufferGeometry args={[4, 2.5, 4]} />
            <meshStandardMaterial color="#fa947d" />
        </mesh>
    )
}