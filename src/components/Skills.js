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

const Skills = props => {
  return (
    <SkillsWrap>
      <CatagoryWrap>
        <CatagoryBox>
          <H1 center style={{marginBottom: "15px"}} em={ window.innerWidth > 480 ? 1.6 : 1.3 }>Languages</H1>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={javascript} /><Label>JavaScript/ES6+</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={html} /><Label>HTML5</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={css} /><Label>CSS3</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={cpp} /><Label>C/C++</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={golang} /><Label>Golang</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={sql} /><Label>PostgreSQL</Label>
          </SpanBlock>
        </CatagoryBox>
        <CatagoryBox style={{gridColumn: "2/3"}}>
          <H1 center style={{marginBottom: "15px"}} em={ window.innerWidth > 480 ? 1.6 : 1.3 }>Libraries/Tools</H1>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={react} /><Label>React.js</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={react} /><Label>React Native</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={redux} /><Label>Redux</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={styledLogo} /><Label>styled-components</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={git} /><Label>Git/Github</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={sdl} /><Label>SDL 2.0</Label>
          </SpanBlock>
          <SpanBlock>
            <Icon style={{marginBottom: "0px", display: "inline-block"}} src={mplab} /><Label>MPLAB X IDE</Label>
          </SpanBlock>
        </CatagoryBox>
        <CatagoryBox center style={{gridRow: "2/3", gridColumn: "1/3"}}>
          <H1 center style={{marginBottom: "15px"}} em={ window.innerWidth > 480 ? 1.6 : 1 }>Operating Systems/Environments</H1>
          <List>
            <SpanBlock inline>
              <Icon style={{marginBottom: "0px", display: "inline-block"}} src={mac} /><Label style={{marginBottom: "0px", marginRight: "15px"}}>MacOS</Label>
            </SpanBlock>
            <SpanBlock inline>
              <Icon style={{marginBottom: "0px", display: "inline-block"}} src={linux} /><Label style={{marginBottom: "0px", marginRight: "15px"}}>GNU/Linux</Label>
            </SpanBlock>
            <SpanBlock inline>
              <Icon style={{marginBottom: "0px", display: "inline-block"}} src={node} /><Label style={{marginBottom: "0px", marginRight: "15px"}}>Node.js</Label>
            </SpanBlock>
            <SpanBlock inline>
              <Icon style={{marginBottom: "0px", display: "inline-block"}} src={docker} /><Label style={{marginBottom: "0px", marginRight: "15px"}}>Docker</Label>
            </SpanBlock>
          </List>
        </CatagoryBox>
      </CatagoryWrap>
      <ImageContainer>
        <Image alt={alt1} src={bread} />
        <Image alt={alt2} src={bbook} />
        <Image alt={alt3} src={game} />
      </ImageContainer>
    </SkillsWrap>
  )
}

const alt1 = "Electrical circuit on a breadboard in dark lighting"
const alt2 = "App login with terminal text in background"
const alt3 = "Programming book and Macbook air with white circle and blue background program running on a desk"

const SkillsWrap = styled.section`
  background-color: #000;
  width: 100%;
  padding: 40px 0px 40px 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width: 1350px) {
    padding: 40px;
    grid-gap: 40px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
const CatagoryWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 20px;
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`
const CatagoryBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
  border: 3px solid #FFFFFF;
  display: ${ props => props.center ? "grid" : "block" };
  justify-items: ${ props => props.center ? "center" : "left" };
  @media (max-width: 630px) {
    grid-column: 1/2 !important;
  }
`
const Label = styled.span`
  color: white;
  margin-bottom: 15px;
  margin-left: 10px;
  box-sizing: border-box;
  font-size: 1.4em;
  letter-spacing: 2px;
  display: inline-block;
`
const ImageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 40px;
  align-self: center;
  justify-self: center;
  @media (max-width: 1200px) {
    align-items: center;
    justify-items: center;
  }
`
const Image = styled.img`
  height: 300px;
  @media (max-width: 1200px) {
    height: auto;
    width: 80%;
  }
`
const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
`
const SpanBlock = styled.span`
  display: ${ props => props.inline ? "inline-block" : "block" };
`

export default Skills