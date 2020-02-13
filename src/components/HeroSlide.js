import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

import water from '../assets/images/jumping-water.jpg'

const HeroWrap = styled.section`
  width: 100%;
  height: 300vh;
`
const Sticky = styled.div`
  background-image: url(${water});
  background-size: cover;
  width: 100%;
  height: calc(100vh - 60px);
  position: sticky;
  top: 0px;
`
const H1 = styled.h1`
  color: white;
  margin: 0px;
  font-size: ${props => props.em || 4}em;
  font-weight: 600;
  letter-spacing: 4px;
  opacity: ${props => props.op || 1};
`
const Zoom = styled.section.attrs(props => ({
  style: {
    transform: `scale(${props.scale})`
  }
}))`
  background-color: pink;
  width: 100%;
  height: 100%;
`
const BioWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
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

  console.log(computedScale)
  return (
    <HeroWrap>
      <Sticky>
        <H1>RYAN'S PORTFOLIO</H1>
        <H1 em="1.5" op="0.8" >Designed by Ryan Sam in Houston</H1>
        <H1 em="1" op="0.7">Inspired by Apple</H1>
        <BioWrap>
          <Zoom ref={scaleRef} scale={computedScale >= 1 ? 1 : computedScale} />
        </BioWrap>
      </Sticky>
    </HeroWrap>
  )
}

export default Hero