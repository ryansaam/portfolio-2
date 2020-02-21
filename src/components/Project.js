import React from 'react'
import styled from 'styled-components'

import Slide from './Slide.js'

const ProjectWrap = styled.div`
  height: 200%;
  position: relative;
  top: -100%;
`

const Project = props => {
  return (
    <ProjectWrap>
      <Slide style={{height: "calc(100vh - 60px)", position: "sticky", top: "0px"}} />
    </ProjectWrap>
  )
}

export default Project