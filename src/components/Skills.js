import React from 'react'
import styled from 'styled-components'

import { H1, Icon } from './Styled.js'

import javascript from '../assets/vectors/js-logo.svg'
import html from '../assets/vectors/html-logo.svg'
import css from '../assets/vectors/css-logo.svg'
import cpp from '../assets/vectors/cpp-logo.svg'
import golang from '../assets/vectors/golang-logo.svg'
import sql from '../assets/vectors/postgresql-icon.svg'
import mac from '../assets/vectors/macos-logo.svg'
import linux from '../assets/vectors/linux-logo.svg'
import node from '../assets/vectors/node-logo.svg'
import docker from '../assets/vectors/docker-logo.svg'
import react from '../assets/vectors/react-logo.svg'
import redux from '../assets/vectors/redux-logo.svg'
import styledLogo from '../assets/vectors/styled-logo.svg'
import git from '../assets/vectors/github-logo.svg'
import sdl from '../assets/vectors/sdl-logo.png'
import mplab from '../assets/vectors/mplab-logo.svg'

import bread from '../assets/images/bread.jpg'
import bbook from '../assets/images/bbook-login.jpg'
import game from '../assets/images/game.jpg'

const SkillsWrap = styled.section`
  background-color: #000;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: auto 1fr;
`
const CatagoryWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 20px;
`
const CatagoryBox = styled.div`
  padding: 20px;
  border: 3px solid #FFFFFF;
`
const Label = styled.span`
  color: white;
  margin-bottom: 15px;
  font-size: 1.4em;
  letter-spacing: 2px;
  display: inline-block;
`

const Skills = props => {
  return (
    <SkillsWrap>
      <CatagoryWrap>
        <CatagoryBox>
          <H1 center style={{marginBottom: "15px"}} em={1.6}>Languages</H1>
          <Icon src={javascript} /><Label>JavaScript/ES6+</Label>
          <Icon src={html} /><Label>HTML5</Label>
          <Icon src={css} /><Label>CSS3</Label>
          <Icon src={cpp} /><Label>C/C++</Label>
          <Icon src={golang} /><Label>Golang</Label>
          <Icon src={sql} /><Label>PostgreSQL</Label>
        </CatagoryBox>
        <CatagoryBox style={{gridColumn: "2/3"}}>
          <H1 center style={{marginBottom: "15px"}} em={1.6}>Libraries/Tools</H1>
          <Icon src={react} /><Label>React.js</Label>
          <Icon src={react} /><Label>React Native</Label>
          <Icon src={redux} /><Label>Redux</Label>
          <Icon src={styledLogo} /><Label>styled-components</Label>
          <Icon src={git} /><Label>Git/Github</Label>
          <Icon src={sdl} /><Label>SDL 2.0</Label>
          <Icon src={mplab} /><Label>MPLAB X IDE</Label>
        </CatagoryBox>
        <CatagoryBox style={{gridRow: "2/3", gridColumn: "1/3"}}>
          <H1 center style={{marginBottom: "15px"}} em={1.6}>Operating Systems/Environments</H1>
          <Icon style={{marginBottom: "0px"}} inline src={mac} /><Label style={{marginBottom: "0px", marginRight: "15px"}}>MacOS</Label>
          <Icon style={{marginBottom: "0px"}} inline src={linux} /><Label style={{marginBottom: "0px", marginRight: "15px"}}>GNU/Linux</Label>
          <Icon style={{marginBottom: "0px"}} inline src={node} /><Label style={{marginBottom: "0px", marginRight: "15px"}}>Node.js</Label>
          <Icon style={{marginBottom: "0px"}} inline src={docker} /><Label style={{marginBottom: "0px", marginRight: "15px"}}>Docker</Label>
        </CatagoryBox>
      </CatagoryWrap>
      <div style={{display: "grid", gridTemplateRows: "1fr 1fr 1fr", gridGap: "40px", alignSelf: "center", justifySelf: "center"}}>
        <img style={{height: "300px"}} src={bread} />
        <img style={{height: "300px"}} src={bbook} />
        <img style={{height: "300px"}} src={game} />
      </div>
    </SkillsWrap>
  )
}

export default Skills