import React, { useRef } from 'react'
import './App.css'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import store from './store.js'
import { updateScroll } from './actions.js'
import Hero from './components/HeroSlide.js'
import DesignContent from './components/DesignContent.js'
import Project from './components/Project.js'

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

function App() {
  const scrollRef = useRef(null)
  const scrollY = useSelector(state => state.scrollY)

  const handleScroll = () => {
    store.dispatch(updateScroll(scrollRef.current.scrollTop))     
  }
  
  return (
    <div className="App">
      <ContactBar>
        <Button style={{backgroundColor: "#F9F9F9", color: "black"}} >Contact</Button>
      </ContactBar>
      <Main>
        <ScrollWrap ref={scrollRef} onScroll={handleScroll}>
          <div style={{ hieght: "100%", zIndex: "5", position: "relative"}}>
            <Hero scrollPos={scrollY} />
          </div>
          <div style={{backgroundColor: "blue", height: "100%", position: "relative", overflow: "visible"}}>
            <Project />
          </div>
          <DesignContent />
        </ScrollWrap>
      </Main>
    </div>
  );
}

export default App;
