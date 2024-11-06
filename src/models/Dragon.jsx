import {React, useEffect, useRef} from 'react'

import dragonScene from '../assets/3d/dragon.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Dragon = ({isRotating, ...props }) => {
    
   const ref = useRef();
    const {scene, animations} = useGLTF(dragonScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() =>{

        actions['Object_0'].play();
        
    }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref} >
    <primitive object={scene} />
    </mesh>
  )
}

export default Dragon