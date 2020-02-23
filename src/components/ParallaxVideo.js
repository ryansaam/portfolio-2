import React, { useRef, useEffect, useState } from 'react'
import styles from 'styled-components'
import store from '../store.js'
import { updateParallaxOffset } from '../actions.js'

const Video = styles.video`
  visiblity: hidden;
  max-height: 100%;
  width: 100%;
  object-fit: ${props => props.fitToScreen ? "cover" : "contain"};
`
const VideoWrap = styles.div`
  display: block;
  vertical-align: top;
  box-sizing: border-box;
  background-color: #000;
  position: sticky;
  top: 0px;
  line-height: 1;
  :-moz-full-screen {
    position: absolute;
  }
 :-webkit-full-screen {
    width: 100% !important;
    height: 100% !important;
  }
  width: 100%;
  max-width: 100%;
  height: calc(100vh - 60px);
`

const ParallaxVideo = props => {
  const { autoPlay, loop, preload, fitToScreen } = props
  const [scrollHeight, setScrollHeight] = useState("")
  const heightRef = useRef(null)
  let videoRef = useRef(null)

  // lower numbers = faster playback
  const playbackConst = 250

  const updateHeight = () => {
    setScrollHeight(heightRef.current ? Math.floor(videoRef.current.duration) * playbackConst + "px" : "0px")
  }

  useEffect(() => {
    const offset = heightRef.current.getBoundingClientRect().top
    store.dispatch(updateParallaxOffset(offset))
    scrollAnimation()
  },[])

  return (
    <div
      style={{height: scrollHeight}}
      ref={heightRef}
    >
      <VideoWrap>
        <Video
          muted
          preload={preload}
          autoPlay={autoPlay}
          loop={loop}
          ref={videoRef}
          fitToScreen={fitToScreen}
          onLoadedMetadata={updateHeight}
          playsInline
          id="para-vid"
        >
          {props.children}
        </Video>
      </VideoWrap>
    </div>
  )
}

const scrollAnimation = () => {
  let fpsInterval, now, then, elapsed;
  let scrollY = 0
  const state = store.getState()
  const video = document.getElementById("para-vid")
  const playbackConst = 250 // lower numbers = faster playback
  
  store.subscribe(() => {
    scrollY = store.getState().scrollY
  })

  const animateScroll = () => {
    requestAnimationFrame(animateScroll)
    // calc elapsed time since last loop
    now = Date.now();
    elapsed = now - then;
  
    // if enough time has elapsed, draw the next frame
    if (elapsed > fpsInterval) {
      // Get ready for next frame by setting then=now, but also adjust for your
      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
      then = now - (elapsed % fpsInterval);
      // render
      video.currentTime = (scrollY - state.parallaxOffset) / playbackConst
    }
  }
  
  const startAnimation = (fps) => {
    fpsInterval = 1000 / fps
    then = Date.now()
    animateScroll()
  }

  startAnimation(15)
}

export default ParallaxVideo