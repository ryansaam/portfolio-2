import React from 'react'
import styled from 'styled-components'

import { H1, Icon } from './Styled.js'

import gmail from '../assets/vectors/gmail-logo.svg'
import linkedin from '../assets/vectors/linkedin-logo.svg'
import git from '../assets/vectors/github-logo.svg'

const ContactWrap = styled.section`
  background-color: #121212;
  width: 100%;
  height: 600px;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
  display: grid;
  justify-items: center;
  align-items: center;
`
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const P = styled.p`
  color: white;
  font-size: 1.1em;
  opacity: 0.6;
`
const Connect = styled.div`
  display: grid;
  align-items: top;
  justify-items: center;
  grid-template-rows: auto auto 1fr;
  grid-gap: 20px;
`
const Info = styled.span`
  color: white;
  margin-bottom: 10px;
  font-size: 1.4em;
  display: block
`

const Contact = props => {
  return (
    <ContactWrap>
      <Content>
        <article>
          <H1 center em={2.4}>What interest me</H1>
          <P>{p1}</P>
          <P>{p2}</P>
          <P>{p3}</P>
          <P>{p4}</P>
        </article>
        <Connect id="contact">
          <H1 em={2.4}>Get in touch!</H1>
          <div>
            <a href="mailto:ryansam.inquiries@gmail.com">
              <Icon style={{marginBottom: "0px", marginRight: "10px"}} inline src={gmail} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ryan-sam-748504161/">
              <Icon style={{marginBottom: "0px", marginRight: "10px"}} inline src={linkedin} />
            </a>
            <a target="_blank" href="https://github.com/ryansaam">
              <Icon style={{marginBottom: "0px", marginRight: "10px"}} inline src={git} />
            </a>
          </div>
          <div>
            <Info>Email: ryansam.inquiries@gmail.com</Info>
            <Info>Phone: (832)642-5068</Info>
          </div>
        </Connect>
      </Content>
    </ContactWrap>
  )
}

const p1 = `
What excites me about computer technology today is its ability to
solve numerous complex problems. Everyday more and more applications
of hardware and software arise to what seems to be an endless amount.
I strive to find new applications or how to improve on current ones.
Weather that is making a beautiful landing page, building data processing 
services, or writing flight software for the new space race.
`
const p2 = `
Currently I specialize in web technologies with a focus on the frontend 
aspect. I like applying design skills with animations to make a more 
exciting experience for the end user. It's really interesting to see work 
from someone like Sarah Drasner who really thinks about how good 
design positively affects the user.
`

const p3 = `
However, I also have a lot of interest in backend technologies. There is
something weirdly fun about writing algorithms optimized to process large
amounts of data quickly. Knowing the backend's key role in an application's
success, I like to research how to better write these programs so users can
quickly access data.
`

const p4 = `
Over all though I think I have found the most enjoyment working close to
the machine. Because my focus on the web, I don't allot as much time as I
would like to learn embedded systems. In my later career though I hope
to work on these tiny computers, or maybe large depending on the application.
And maybe one day I will write the software that lives on a rocket!
`

export default Contact