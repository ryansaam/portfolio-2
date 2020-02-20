import React from 'react'
import styled from 'styled-components'

import imgMask from '../assets/images/text-mask-bg.jpg'
import portrait from '../assets/images/portrait.jpg'

const MaskedText = styled.p`
  background-image: url(${imgMask});
  background-size: cover;
  background-position: right;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  font-size: 2em;
  letter-spacing: 2px;
  padding: 20px;
  grid-column: 2/3;
`
const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`
const Frame = styled.img`
  border: 20px solid #1E1E1E;
  border-radius: 25px;
  width: 60%;
  display: block;
  grid-column: 1/2;
`

const BioContent = props => {
  return (
    <ContentWrap>
      <Frame src={portrait} />
      <MaskedText>
      Quisque eget tincidunt ipsum. Curabitur aliquet blandit nisi, at aliquam quam. 
      Sed tempor egestas facilisis. Sed a diam a ipsum vehicula iaculis vitae eget quam. 
      Morbi vulputate laoreet finibus. Phasellus varius lobortis ligula eget lacinia. Praesent blandit, 
      lectus et porta vehicula, ante risus accumsan leo, ut aliquet diam augue eleifend libero. Nam 
      dapibus hendrerit risus at blandit. Nulla facilisi. Nulla imperdiet, neque ac sodales scelerisque, 
      ex tellus mattis nulla, eget auctor tortor justo eget neque. Donec convallis nulla eu diam 
      tristique, nec efficitur libero rhoncus.
      </MaskedText>
    </ContentWrap>
  )
}

export default BioContent