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
  },[scroll])

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
            <DesignItem desc={desc1}>
              <Video muted loop ref={bbookRef} src={bbook} />
            </DesignItem>
            <DesignItem desc={desc2}>
              <Video muted loop ref={latheRef} src={lathe} />
            </DesignItem>
            <DesignItem desc={desc3}>
              <Video muted loop ref={cpanelRef} src={cpanel} />
            </DesignItem>
            <DesignItem desc={desc4}>
              <Image alt={desc4} src={zsites1} />
            </DesignItem>
            <DesignItem desc={desc5}>
              <Image alt={desc5} src={zsites2} />
            </DesignItem>
            <DesignItem desc={desc6}>
              <Image alt={desc6} src={zsites3} />
            </DesignItem>
            <DesignItem desc={desc7}>
              <Image alt={desc7} src={zsites4} />
            </DesignItem>
            <DesignItem desc={desc8}>
              <Image alt={desc8} src={eyvo1} />
            </DesignItem>
            <DesignItem desc={desc9}>
              <Image alt={desc9} src={eyvo2} />
            </DesignItem>
            <DesignItem desc={desc10}>
              <Image alt={desc10} src={eyvo3} />
            </DesignItem>
            <DesignItem desc={desc11}>
              <Image alt={desc11} src={eyvo4} />
            </DesignItem>
          </DesignContainer>
        </Content>
      </ParallaxVideo>
    </div>
  )
}

const DesignItem = props => {
  return (
    <div>
      {props.children}
      <div style={{margin: "5px 0px", padding: "0px 40px", boxSizing: "border-box"}}>
        <span style={{
          color: "white",
          width: "100%",
          fontSize: "1.2em",
          textAlign: "center",
          display: "inline-block"
        }}>{props.desc}</span>
      </div>
    </div>
  )
}

const desc1 = "A startup idea I had. I used Adode XD to build a demo"
const desc2 = "A propasal atempt to save mini-lathe.com that was discused with the orginal owner over email. Prototyped using React.js"
const desc3 = "My first attempt trying Angular 9"
const desc4 = "A design for a Houston company I made while working at Atomar using Sketch. Here is the employee login"
const desc5 = "A daily inspection report"
const desc6 = "The main dashboard"
const desc7 = "The navigation"
const desc8 = "Another project I had while at Atomar. This was then actually developed by our team and myself"
const desc9 = "Creating an account"
const desc10 = "Password creation"
const desc11 = "API integration with a company called Xero"
export default DesignContent