import React, { useRef, useState } from 'react'
import './App.css'
import styled from 'styled-components'

import Hero from './components/HeroSlide.js'

const ContactBar = styled.div`
  background-color: #414141;
  width: 100%;
  height: 60px;
  padding-right: 120px;
  box-sizing: border-box;
  display: grid;
  align-items: center;
`
const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const ScrollWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: scroll;
`
const Button = styled.button`
  background-color: "#5D378F";
  color: "white";
  width: 160px;
  height: 40px;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 2px;
  justify-self: right;
  border-radius: 20px;
  border: none;
  outline: none;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`
const PinkSection = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`

function App() {
  const scrollRef = useRef(null)
  const [scrollPos, setScrollPos] = useState(0)

  return (
    <div className="App">
      <ContactBar>
        <Button style={{backgroundColor: "#F9F9F9", color: "black"}} >Contact</Button>
      </ContactBar>
      <Main>
        <ScrollWrap ref={scrollRef} onScroll={() => setScrollPos(scrollRef.current.scrollTop)}>
          <Hero scrollPos={scrollPos}></Hero>
          <PinkSection/>
        </ScrollWrap>
      </Main>
    </div>
  );
}

export default App;
