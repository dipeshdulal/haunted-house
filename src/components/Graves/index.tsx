import { useMemo } from "react";
import { BoxBufferGeometry, Color, MeshStandardMaterial } from "three";


const MIN_RADIUS = 5;
const MAX_RADIUS = 15;

export const Graves = () => {
    const geometry = useMemo(() => new BoxBufferGeometry(0.5, 1, 0.1), []);
    const material = useMemo(() => {
        const m = new MeshStandardMaterial();
        m.color = new Color("#e8e8e8");
        return m;
    }, []);
    return (
        <group>
            {new Array(50).fill(null).map((_, idx) => {
                const radius = MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS);
                const randAngle = Math.random() * 2 * Math.PI;
                const x = radius * Math.cos(randAngle);
                const z = radius * Math.sin(randAngle);
                const rotationZ = (Math.random() - 0.5) * Math.PI / 4;
                return (
                    <mesh position={[x, 0.1, z]} rotation={[0, 0, rotationZ]} geometry={geometry} material={material} key={idx} />
                )
            })}
        </group>
    );
}