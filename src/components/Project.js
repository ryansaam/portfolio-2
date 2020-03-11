import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { Slide, H1, Button } from './Styled.js'
import litphumVideo from '../assets/playback-media/litphum-demo.mp4'
import logo from '../assets/images/litphum-logo.png'

const Project = props => {
  const [reject, setReject] = useState(true)
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const scrollY = useSelector(state => state.scrollY)

  useEffect(() => {
    const offset = containerRef.current.getBoundingClientRect()
    if (reject) {
      if ((offset.top - 80) + offset.height <= offset.height) {
        setTimeout(() => { videoRef.current.play()}, 2000)
        setReject(!reject)
      }
    }
  }, [scrollY, reject])

  return (
    <ProjectWrap>
      <Slide ref={containerRef} style={{height: "calc(100vh - 60px)", position: "sticky", top: "0px"}} >
        <Container>
          <H1 style={{marginBottom: "20px", textAlign: "center"}} em={2.8}>Featured Project</H1>
          <img alt={"logo for project"} style={{width: "200px"}} src={logo} />
          <Video ref={videoRef} muted loop src={litphumVideo} />
          <div style={{width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "20px"}}>
            <Button move={"right"}>Github</Button>
            <Button move={"left"}>View</Button>
          </div>
        </Container>
      </Slide>
    </ProjectWrap>
  )
}

const ProjectWrap = styled.div`
  height: 200%;
  position: relative;
  top: -100%;
`
const Container = styled.div`
  width: 100%;
  align-self: center;
  justify-self: center;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: auto auto 1fr auto;
`
const Video = styled.video`
  width: 700px;
  margin: 20px 0px;
  @media (max-width: calc(840px + 40px)) {
    width: 640px;
  }
  @media (max-width: calc(640px + 40px)) {
    width: 440px;
  }
  @media (max-width: calc(440px + 40px)) {
    width: 340px;
  }
  @media (max-width: calc(440px + 40px)) {
    width: 340px;
  }
  @media (max-width: calc(340px + 40px)) {
    width: 300px;
  }
  @media (max-width: calc(300px + 40px)) {
    width: 280px;
  }
  @media (max-width: calc(280px + 40px)) {
    width: 240px;
  }
`

export default Project