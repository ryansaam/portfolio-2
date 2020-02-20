import React from 'react'
// import styled from 'styled-components'
import ParallaxVideo from './ParallaxVideo.js'

import hueRoom from '../assets/playback-media/hue-color-animation-small.mp4'

const DesignContent = props => {
  return (
    <div>
      <ParallaxVideo fitToScreen muted preload="auto" >
        <source src={hueRoom} />
      </ParallaxVideo>
    </div>
  )
}

export default DesignContent