import React from 'react'
import styled from 'styled-components'

import imgMask from '../assets/images/text-mask-bg.jpg'
import portrait from '../assets/images/portrait.jpg'

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
  I don't really think of myself as a software engineer. I consider myself in general terms 
  like "engineer" or "computer scientist". Engineer because it's not just software I'm 
  engineering, but other things like full fledged designs with thought in every color. Or 
  dumb circuits that make a shift registar count to 255 in binary. Computer scientist 
  because I look far beyond the code I write for them to execute. But many other 
  professionals wouldn't call me any three of those titles. Because I didn't go to college, 
  or I might not have as much expertises they do in one domain. But for the past two years I 
  have studied the web for 5 - 16 hours a day. Although I can't show you all those hours I 
  spent reading books, reading articles, watching tutorials, and developing migraines from 
  seeing some form or "Error" in the console. I can show you some of the highlights of the 
  things I built using what I learned from those experiences. Recruiters, Developers, or 
  Engineers that see this portfolio, I hope you can see me as a future asset to your team. I love 
  software and computers and if you have an open position in those fields, I would love to work 
  with you!
`

const ContentWrap = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 40px;
  @media (max-width: 980px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: none;
  }
  @media (max-width: 1100px) and (min-height: 1340px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: none;
  }
  @media (max-width: 540px) {
    grid-gap: 20px;
  }
`
const Frame = styled.img`
  border: 20px solid #1E1E1E;
  border-radius: 25px;
  width: 300px;
  display: block;
  grid-column: 1/2;
  @media (max-width: 980px) {
    width: 220px;
    grid-row: 1/2;
    grid-column: 1/2;
  }
  @media (max-width: 790px) {
    width: 180px;
  }
  @media (max-width: 1100px) and (min-height: 1340px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  @media (max-width: 540px) {
    border: 15px solid #1E1E1E;
    width: 120px;
  }
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
  @media (max-width: 1280px) {
    font-size: 1.6em;
  }
  @media (max-width: 1180px) {
    font-size: 1.5em;
  }
  @media (max-width: 1100px) {
    font-size: 1.3em;
  }
  @media (max-width: 1100px) and (max-height: 780px) {
    font-size: 1.2em;
  }
  @media (max-width: 980px) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  @media (max-width: 1100px) and (min-height: 1340px) {
    grid-row: 2/3;
    grid-column: 1/2;
    font-size: 1.7em;
  }
  @media (max-width: 920px) {
    font-size: 1.2em;
  }
  @media (max-width: 740px) {
    font-size: 1.1em;
  }
  @media (max-width: 630px) {
    font-size: 1em;
  }
  @media (max-width: 480px) {
    font-size: 0.8em;
  }
  @media (max-width: 370px) {
    font-size: 0.7em;
  }
  @media (max-width: 420px) and (max-height: 830px) {
    font-size: 14px;
  }
  @media (max-width: 420px) and (max-height: 790px) {
    font-size: 13px;
  }
  @media (max-width: 420px) and (max-height: 740px) {
    font-size: 12px;
  }
  @media (max-width: 380px) and (max-height: 820px) {
    font-size: 13px;
  }
  @media (max-width: 380px) and (max-height: 750px) {
    font-size: 11px;
  }
  @media (max-width: 380px) and (max-height: 680px) {
    font-size: 10px;
  }
  @media (max-width: 380px) and (max-height: 650px) {
    font-size: 9px;
  }
`

export default BioContent