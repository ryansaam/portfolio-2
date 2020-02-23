import React from 'react'
import styled from 'styled-components'

import { H1 } from './Styled.js'
import board from '../assets/images/white-board.jpg'
import office from '../assets/images/work-desk.jpg'
import design from '../assets/images/tablet-login.png'

const WorkWrap = styled.section`
  background-color: #1E1E1E;
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`
const DescText = styled.p`
  color: white;
  font-size: 1.1em;
  text-align: center;
  padding: 20px;
  margin: 0px;
  box-sizing: border-box;
  opacity: 0.8;
`
const HeadingWrap = styled.div`
  width: 100%;
  grid-row: 1/2;
  grid-column: 1/4;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  align-items: center;
  justify-items: center;
`
const Job = styled.div`
  grid-row: 4/5;
  display: grid;
  align-self: start;
`
const Summary = styled.div`
  width: 700px;
  grid-row: 3/4;
  grid-column: 1/4;
`
const ImageGroup = styled.div`
  grid-row: 2/3;
  grid-column: 1/4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`
const Image = styled.img`
  height: 200px;
  width: 300px;
`

const Work = props => {
  return (
    <WorkWrap>
      <HeadingWrap>
        <H1 em={2.8}>Work Experience</H1>
        <H1 op={0.8} em={2.4}>Atomar</H1>
        <H1 op={0.6} em={1.4}>Houston, TX</H1>
      </HeadingWrap>
      <ImageGroup>
        <Image src={board} />
        <Image src={office} />
        <Image src={design} />
      </ImageGroup>
      <Summary>
        <DescText style={{fontSize: "1.3em"}}>{desc1}</DescText>
      </Summary>
      <Job style={{gridColumn: "1/2"}}>
        <H1 center em={1.4}>Development</H1>
        <DescText>{desc2}</DescText>
      </Job>
      <Job style={{gridColumn: "2/3"}}>
        <H1 center em={1.4}>Project Management</H1>
        <DescText>{desc3}</DescText>
      </Job>
      <Job style={{gridColumn: "3/4"}}>
        <H1 center em={1.4}>Design</H1>
        <DescText>{desc4}</DescText>
      </Job>
    </WorkWrap>
  )
}

const desc1 = `
Atomar is a Houston based company that contracts its services to
businesses in the Houston area. Because of its small size, I was given
many responsibilties to help the team and our clients.
`
const desc2 = `
Generally I worked on business saas applications for two companies in Houston. 
Mostly I redesigned their layouts and looked over them to find bugs. For bigger
projects I sometimes had to connect APIs or design a project from scrach.
`
const desc3 = `
While managing I communicated what tasks to complete with our developers in India. 
Every morning I formed scrum meetings to track progess on our projects. By tracking 
our teams progress I ensured deadlines were being met. I also demoed to clients 
their applications and updated them on our progress keeping them happy. 
`
const desc4 = `
With my Adobe software (Photoshop, Priemere Pro, XD) and Sketch experience, I designed 
the mockups for new projects or feature requests (see some above). Then I would explain
the designs to the team showing key features and how they worked.
`

export default Work