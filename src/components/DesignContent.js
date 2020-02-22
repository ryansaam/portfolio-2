import React from 'react'
import styled from 'styled-components'
import ParallaxVideo from './ParallaxVideo.js'

import hueRoom from '../assets/playback-media/hue-color-animation-small.mp4'

const Content = styled.section`
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 4;
`

const DesignContent = props => {
  return (
    <div style={{position: "relative", zIndex: "3"}}>
      <ParallaxVideo fitToScreen muted preload="auto" >
        <source src={hueRoom} />
      </ParallaxVideo>
      <Content>

      </Content>
    </div>
  )
}

export default DesignContent