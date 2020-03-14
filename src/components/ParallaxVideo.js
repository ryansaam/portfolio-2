import React, { useRef, useEffect, useState } from 'react'
import _ from "lodash"
import styles from 'styled-components'
import store from '../store.js'
import { updateParallaxOffset } from '../actions.js'

const ParallaxVideo = props => {
  const { autoPlay, loop, preload } = props
  const [scrollHeight, setScrollHeight] = useState("")
  const heightRef = useRef(null)
  let videoRef = useRef(null)

  // lower numbers = faster playback
  const playbackConst = props.playbackConst

  const updateHeight = () => {
    setScrollHeight(heightRef.current ? Math.floor(videoRef.current.duration) * playbackConst + "px" : "0px")
  }

  useEffect(() => {
    const offset = heightRef.current.getBoundingClientRect().top
    store.dispatch(updateParallaxOffset(offset))
    if (window.innerWidth >= 1000 )
      scrollAnimation(playbackConst)
    else
      videoRef.current.currentTime = 8
  },[playbackConst])
  useEffect(() => {
    window.addEventListener("resize", _.throttle(() => {
      updateHeight()
    }, 1000))
    return () => window.removeEventListener("resize")
  }, [])

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
          fitToScreen
          onLoadedMetadata={updateHeight}
          playsInline
          id="para-vid"
        >
          {props.src}
        </Video>
        {props.children}
      </VideoWrap>
    </div>
  )
}

const scrollAnimation = (playback) => {
  let fpsInterval, now, then, elapsed;
  let scrollY = 0
  const state = store.getState()
  const video = document.getElementById("para-vid")
  const playbackConst = playback // lower numbers = faster playback
  
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
      let time = Math.round((scrollY - state.parallaxOffset) / playbackConst * 100) / 100
      video.currentTime = isFinite(time) ? time : 0
    }
  }
  
  const startAnimation = (fps) => {
    fpsInterval = 1000 / fps
    then = Date.now()
    animateScroll()
  }

  startAnimation(15)
}

const Video = styles.video`
  visiblity: hidden;
  height: 100%;
  width: 100%;
  object-fit: ${props => props.fitToScreen ? "cover" : "contain"};
`
const VideoWrap = styles.div`
  display: block;
  vertical-align: top;
  box-sizing: border-box;
  background-color: #000;
  position: sticky;
  top: 60px;
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

export default ParallaxVideo