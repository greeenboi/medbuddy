/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 dna.gltf --transform
Author: Leon_dp (https://sketchfab.com/leondp)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-simply-visualization-of-dna-51f5ab2ffc364f60be00289eb6909535
Title: Stylized simply visualization of DNA
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Dna(props) {
  const { nodes, materials } = useGLTF('/dna-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials['1001']} position={[74.734, 458.102, 561.216]} rotation={[-0.013, 0.235, 2.339]} scale={100} />
    </group>
  )
}

useGLTF.preload('/dna-transformed.glb')
