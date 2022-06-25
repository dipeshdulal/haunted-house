import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Color } from "three";
import { Graves } from "../Graves";
import { House } from "../House";
import { Lights } from "../Lights";

export const Entry = () => {
    const { gl, camera } = useThree();
    useEffect(() => {
        gl.setClearColor(new Color('black'))
        camera.position.set(3, 2, 7)
    }, [])

    return (
        <>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeBufferGeometry args={[100, 100]} />
                <meshStandardMaterial color="#8cfa7d" />
            </mesh>
            <House />
            <Graves />
            <Lights />
            <OrbitControls makeDefault maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
        </>
    )


}