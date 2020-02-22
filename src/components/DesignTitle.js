import React from 'react'
import styled from 'styled-components'

import { H1 } from './Styled.js'
import image from '../assets/images/japan-city.jpg'

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
  display: grid;
  grid-template-columns: 1fr 40%;
  justify-items: right;
  align-items: center;
`

const DesignTitle = props => {
  return (
    <TitleWrap>
      <Container>
        <HeaderWrap>
          <div>
            <H1 style={{color: "#b1b1b1"}}>I'm not a designer,</H1>
            <H1>but I make designes.</H1>
          </div>
        </HeaderWrap>
      </Container>
    </TitleWrap>
  )
}

export default DesignTitle