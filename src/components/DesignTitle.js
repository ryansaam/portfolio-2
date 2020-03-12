import React from 'react'
import styled from 'styled-components'

import { H1 } from './Styled.js'
import image from '../assets/images/japan-city.jpg'

const DesignTitle = props => {
  return (
    <TitleWrap>
      <Container>
        <HeaderWrap>
          <div>
            <H1 style={{color: "#b1b1b1", fontSize: window.innerWidth > 765 ? "4em" : "1.4em"}}>I'm not a designer,</H1>
            <H1 style={{fontSize: window.innerWidth > 765 ? "4em" : "1.4em"}}>but I make designs.</H1>
          </div>
        </HeaderWrap>
      </Container>
    </TitleWrap>
  )
}

const TitleWrap = styled.div`
  height: 200%;
  position: relative;
  top: -100%;
`
const Container = styled.div`
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 60px);
  position: sticky;
  top: 0px;
`
const HeaderWrap = styled.div`
  background-color: rgba(0,0,0, 0.8);
  width: 100%;
  height: 100%;
  padding-left: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 40%;
  justify-items: right;
  align-items: center;
  @media (max-width: 1260px) {
    grid-template-columns: 1fr 20%;
  }
  @media (max-width: 940px) {
    grid-template-columns: 1fr 10%;
  }
`

export default DesignTitle