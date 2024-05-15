/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Lexyc16 (https://sketchfab.com/Lexyc16)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mercedes-benz-300-sl-gullwing-505241c829c540a4921533000736904e
Title: Mercedes-Benz 300 SL Gullwing
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import {a} from '@react-spring/three';
import modelScene from '../assets/mercedes-benz_300_sl_gullwing.glb';

export function Model(props) {
  const modelRef = useRef();
  const { nodes, materials } = useGLTF(modelScene)
  return (
    <a.group ref={modelRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials['Material.005']}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials['Material.006']}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials['Material.007']}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.black}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.chrome}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.chrome}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.chrome}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.main_color}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.main_color}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials['mid-chrome']}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.tire}
        />
      </group>
    </a.group>
  )
}

export default Model;
