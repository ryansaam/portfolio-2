import React from 'react'
import styled from 'styled-components'

import imgMask from '../assets/images/text-mask-bg.jpg'
import portrait from '../assets/images/portrait.jpg'

const ContentWrap = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 40px;
`
const MaskedText = styled.p`
  background-image: url(${imgMask});
  background-size: cover;
  background-position: right;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  font-size: 1.7em;
  letter-spacing: 2px;
  padding: 0px;
  margin: 0px;
  grid-column: 2/3;
`
const Frame = styled.img`
  border: 20px solid #1E1E1E;
  border-radius: 25px;
  width: 300px;
  display: block;
  grid-column: 1/2;
`

const BioContent = props => {
  return (
    <ContentWrap>
      <Frame src={portrait} />
      <MaskedText>
        {text}
      </MaskedText>
    </ContentWrap>
  )
}

const text = `
  I don't really think of myself as a software engineer. I considier myself as general terms like 
  "engineer" or "computer scientist". Engineer because it's not just software I'm engineering,
  but other things like full fledged designs with thought in every color. Or dumb circuits 
  that make a shift registar count to 255 in binary. Computer scientist because I look far 
  beyond the code I write for them to execute. But many other profesionals wouldn't call me any
  three of those titles. Because I didn't go to college, or I might not have as much expertises 
  they do in one domain. But for the past two years I have studied the web for 5 - 16 hours a day.
  Although I can't show you all those hours I spent reading books, reading articles, watching 
  tutorials, and developing migrains from seeing some form or "Error" in the console. I can show
  you some of the highlights of the things I built using what I learned from those experiences.
  Recruiters, Developers, or Engineers that see this portfolio, I hope you can see me as a future
  assest to your team. I love software and computers and if you have an open position in those
  feilds, I would love to work with you!
`

export default BioContent