import styled from 'styled-components'


export const Slide = styled.section.attrs(props => ({
  style: {
    transform: `scale(${ props.scale }) translateY(${ props.top || 0 }%)`
  }
}))`
  background-color: #000;
  width: 100%;
  height: 100%;
  border: 20px solid ${props => props.border || "#1E1E1E"};
  box-sizing: border-box;
`


export const H1 = styled.h1`
  color: white;
  margin: ${props => props.center ? "auto" : "0px"};
  text-align: ${props => props.center ? "center" : "left"};
  font-size: ${props => props.em || 4}em;
  font-weight: 600;
  letter-spacing: 4px;
  opacity: ${props => props.op || 1};
`


export const Button = styled.button`
  background-color: "#5D378F";
  color: "white";
  width: 160px;
  height: 40px;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 2px;
  justify-self: ${ props => props.move || "center" };
  border-radius: 20px;
  border: none;
  outline: none;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`


export const Icon = styled.span`
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  display: ${props => props.inline ? "inline-block" : "block"};
`