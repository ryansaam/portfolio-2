import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { Slide, H1, Button } from './Styled.js'
import litphumVideo from '../assets/playback-media/litphum-demo.mp4'
import logo from '../assets/images/litphum-logo.png'
import store from '../store.js'

const ProjectWrap = styled.div`
  height: 200%;
  position: relative;
  top: -100%;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: auto auto auto auto;
`

const Project = props => {
  const [reject, setReject] = useState(true)
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const scrollY = useSelector(state => state.scrollY)

  useEffect(() => {
    const offset = containerRef.current.getBoundingClientRect()
    if (reject) {
      if ((offset.top - 80) + offset.height === offset.height) {
        videoRef.current.play()
        setReject(!reject)
      }
    }
  }, [scrollY])

  return (
    <ProjectWrap>
      <Slide style={{height: "calc(100vh - 60px)", position: "sticky", top: "0px"}} >
        <Container ref={containerRef} >
          <H1 em={2.8}>Featured Project</H1>
          <img style={{width: "200px"}} src={logo} />
          <video ref={videoRef} style={{width: "50%"}} muted loop src={litphumVideo} />
          <div style={{width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "20px"}}>
            <Button move={"right"}>Github</Button>
            <Button move={"left"}>View</Button>
          </div>
        </Container>
      </Slide>
    </ProjectWrap>
  )
}

export default Project