import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ParallaxVideo from './ParallaxVideo.js'

import hueRoom from '../assets/playback-media/hue-color-animation-small.mp4'

import bbook from '../assets/playback-media/bbook-prototype.mp4'
import lathe from '../assets/playback-media/mini-lathe.mp4'
import cpanel from '../assets/playback-media/cpanel-demo.mp4'

import zsites1 from '../assets/images/zsites-1.png'
import zsites2 from '../assets/images/zsites-2.png'
import zsites3 from '../assets/images/zsites-3.png'
import zsites4 from '../assets/images/zsites-4.png'

import eyvo1 from '../assets/images/eyvo-1.png'
import eyvo2 from '../assets/images/eyvo-2.png'
import eyvo3 from '../assets/images/eyvo-3.png'
import eyvo4 from '../assets/images/eyvo-4.png'

const Content = styled.section`
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0px;
  z-index: 4;
  display: grid;
  align-items: center;
  justify-items: center;
`
const DesignContainer = styled.div.attrs(props => ({
  style: {transform: `translateX(${props.translate}px)`}
}))`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 300px;
`
const Image = styled.img`
  display: inline-block;
  max-height: 600px;
`
const Video = styled.video`
  display: inline-block;
  max-height: 600px;
`

function playWhenInBounds(video, element) {
  const inBound = () => {
    const videoRect = video.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()
    const videoCenterX = videoRect.left + videoRect.width / 2
    const elementCenterX = elementRect.left + elementRect.width / 2
    const leftBound = elementCenterX - 250
    const rightBound = elementCenterX + 250

    if ( !(videoCenterX > leftBound && videoCenterX < rightBound) )
      return false
    else return true
  }

  if (inBound()) {
    video.play()
  } else {
    video.pause()
    video.currentTime = 0
  }
}

const DesignContent = props => {
  const scroll = useSelector(state => state.scrollY)
  const offset = useSelector(state => state.parallaxOffset)
  const [contentOffset, setContentOffset] = useState(0)
  const [bbookOffset, setBbookOffset] = useState(0)

  const designContainerRef = useRef(null)
  const contentRef = useRef(null)
  const bbookRef = useRef(null)
  const latheRef = useRef(null)
  const cpanelRef = useRef(null)

  useEffect(() => {
    setContentOffset(contentRef.current.offsetWidth)
    setBbookOffset(bbookRef.current.offsetWidth)
  },[])

  useEffect(() => {
    const contentElement = contentRef.current
    const bbookVideo = bbookRef.current
    const latheVideo = latheRef.current
    const cpanelVideo = cpanelRef.current
    playWhenInBounds(bbookVideo, contentElement)
    playWhenInBounds(latheVideo, contentElement)
    playWhenInBounds(cpanelVideo, contentElement)
  },[bbookRef.current, latheRef.current, cpanelRef.current, scroll])

  return (
    <div style={{position: "relative", zIndex: "3"}}>
      <ParallaxVideo 
        fitToScreen
        muted
        preload="auto"
        src={<source src={hueRoom} />}
        playbackConst={825}
      >
        <Content ref={contentRef} >
          <DesignContainer
            ref={designContainerRef} translate={ (offset + ((contentOffset - (bbookOffset / 2)) / 2)) - scroll }
          >
            <Video muted loop ref={bbookRef} src={bbook} />
            <Video muted loop ref={latheRef} src={lathe} />
            <Video muted loop ref={cpanelRef} src={cpanel} />
            <Image src={zsites1} />
            <Image src={zsites2} />
            <Image src={zsites3} />
            <Image src={zsites4} />
            <Image src={eyvo1} />
            <Image src={eyvo2} />
            <Image src={eyvo3} />
            <Image src={eyvo4} />
          </DesignContainer>
        </Content>
      </ParallaxVideo>
    </div>
  )
}

export default DesignContent