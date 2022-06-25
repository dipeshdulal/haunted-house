export const Lights = () => {
    return (
        <>
            <ambientLight color="#e1f7f7" />
            <group position={[5, 5, 0]}>
                <pointLight args={["white", 2, 10]} />
            </group>
        </>
    )
}