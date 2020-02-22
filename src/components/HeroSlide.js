import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

import water from '../assets/images/jumping-water.jpg'
import BioContent from './BioContent.js'
import { Slide, H1 } from './Styled.js'

const HeroWrap = styled.section`
  width: 100%;
  height: 225vh;
  z-index: 10;
`
const Sticky = styled.div`
  background-image: url(${water});
  background-size: cover;
  width: 100%;
  height: calc(100vh - 60px);
  position: sticky;
  top: 0px;
`
const BioWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
`

const Hero = props => {
  const [computedScale, setComputedScale] = useState(0)
  const scaleRef = useRef(null)

  useEffect(() => {
    setComputedScale(props.scrollPos * 0.001)
  }, [props.scrollPos])

  return (
    <HeroWrap>
      <Sticky>
        <header style={{padding: "20px 30px"}}>
          <H1>RYAN'S PORTFOLIO</H1>
          <H1 em="1.5" op="0.8" >Designed by Ryan Sam in Houston</H1>
          <H1 em="1" op="0.7">Inspired by Apple</H1>
        </header>
        <BioWrap>
          <Slide ref={scaleRef} scale={computedScale >= 1 ? 1 : computedScale}>
            <Container>
              <BioContent/>
            </Container>
          </Slide>
        </BioWrap>
      </Sticky>
    </HeroWrap>
  )
}

export default Hero