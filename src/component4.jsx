import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, Line, Trail, Float, Sphere, Html } from '@react-three/drei';
import './mainx.css'
import Logo from './Logo'
import { Text3D } from '@react-three/drei';
import { useGLTF } from '@react-three/drei/native';
import { PlaneGeometry } from 'three';

export default function Componente4() {

    function Model_naveigecem(props) {
        const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
        return <primitive object={scene} {...props} />
    }

    function Boxx2(props) {
        // This reference gives us direct access to the THREE.Mesh object
        const ref = useRef()
        // Hold state for hovered and clicked events
        const [hovered, hover] = useState(false)
        const [clicked, click] = useState(false)
        //movimineto de la esfera
        //useFrame((state, delta) => (ref.current.rotation.x += delta))
        // Return the view, these are regular Threejs elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={ref}
                scale={clicked ? 1.5 : 1}

                onClick={(event) => click(onOpen)}
            /*onClick={(event) => click(!clicked)}*/
            /*onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(event) => hover(false)}*/
            >
                <sphereGeometry args={[14]} />
                <meshStandardMaterial color='#2B67F1' /*metalness={2} roughness={0}*/ />
            </mesh>
        )
    }


    /*
 para hacer textto 3d se dede 
buscar:
 una fuente de texto tipo OSwALd de google  https://fonts.google.com/
 luego
 convertirla con facetype.js https://gero3.github.io/facetype.js/
 luego implementala dentro de tu proyecto 
 y listo 
 <Text3D font="/json/Oswald_Regular.json" position={[0,3,2]} size={[5]} height={[2]} >
            IGECEM / FISCALIA
        </Text3D>

        NOTA: IMPORTANTE DEBES SABER QUE LOS TIPOS DE LETRAS DE JSON DEBEN IR DENTRO DE LA CARPETA public/json/todoslostipos de letras.
        ejemplo:
        /json/Allura_Regular.json
 */

    return (
        <>
            <Canvas className='CanvasX' camera={{ position: [0, 0, 60], fov: 25 }} >
                <OrbitControls />

                <color attach="background" args={['#7469B6']} />

                <Environment preset='forest' metalness={0} roughness={0} />
                <Stars saturation={0} count={800} speed={3} />
                <GizmoHelper alignment="botton-right" margin={[100, 100]} >
                    <GizmoViewport axisColors={['red', 'green', 'blue']} labelColors="black" ></GizmoViewport>
                </GizmoHelper>

                <Logo></Logo>

                <Model_naveigecem position={[0, 0, 2]}  ></Model_naveigecem>



                <mesh rotation={[-Math.PI / 1, 0, 0]} >
                    <boxGeometry args={[1, 5, 0.1]} />
                    <meshStandardMaterial color='#1E55FA' />
                </mesh>


                <Text3D font="/json/Allura_Regular.json" position={[-28, 3, 2]} size={[5]} height={[2]} >
                    IGECEM / DICTAMEN                    
                </Text3D>




                <mesh position={[0, 15.5, -39.5]} >
                    <boxGeometry args={[80, 30, 1]} />
                    <meshStandardMaterial color='#1E55FA' metalness={0} roughness={0} />
                </mesh>




                <mesh rotation={[-Math.PI / 2, 0, 0]} >
                    <boxGeometry args={[80, 80, 1]} />
                    <meshStandardMaterial color='#1E55FA' metalness={0} roughness={0} />
                </mesh>





                {/* <mesh rotation={[-Math.PI / 2, 0, 0]}>
  <planeGeometry args={[50, 50, 100, 100]} />
  <meshStandardMaterial color='black' metalness={0} roughness={0}/>
</mesh>*/}




            </Canvas>
        </>
    )
}