import styled from 'styled-components'

const Slide = styled.section.attrs(props => ({
  style: {
    transform: `scale(${ props.scale }) translateY(${ props.top || 0 }%)`
  }
}))`
  background-color: #000;
  width: 100%;
  height: 100%;
  border: 20px solid ${props => props.border || "#1E1E1E"};
  box-sizing: border-box;
  display: grid;
  align-items: center;
  justify-items: center;
`

export default Slide