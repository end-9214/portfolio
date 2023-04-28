import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components'

const Cube = () => {
  return (
    <mesh>
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <PerspectiveCamera
              makeDefault
              position={[0,0,2]} 
              />
              <color attach="background" args={['#dc9dcd']} />
              <Text fontSize={1} color="#555">
                Hello
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
  )
}

export default Cube