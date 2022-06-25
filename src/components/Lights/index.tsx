export const Lights = () => {
    return (
        <>
            <ambientLight color="#e1f7f7" intensity={0.02} />
            <group position={[0, 5, 3]}>
                <pointLight args={["white", 2, 10]} intensity={0.1} />
            </group>
        </>
    )
}