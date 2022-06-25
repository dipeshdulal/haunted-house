import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber"
import { useEffect, useMemo } from "react"
import { Color, Fog } from "three";
import { Graves } from "../Graves";
import { House } from "../House";
import { Lights } from "../Lights";

export const Entry = () => {
    const { gl, camera, scene } = useThree();
    const fog = useMemo(() => new Fog("#262837", 1, 10), []);
    useEffect(() => {
        gl.setClearColor(new Color('#262837'))
        camera.position.set(3, 2, 7)
        scene.fog = fog;
    }, [])

    return (
        <>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeBufferGeometry args={[100, 100]} />
                <meshStandardMaterial color="#d7ffd1" />
            </mesh>
            <House />
            <Graves />
            <Lights />
            <OrbitControls makeDefault maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
        </>
    )


}