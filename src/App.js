import React, { useRef } from 'react'
import './App.css'
import _ from 'lodash'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { updateScroll } from './actions.js'
import store from './store.js'
import Hero from './components/HeroSlide.js'
import DesignTitle from './components/DesignTitle.js'
import DesignContent from './components/DesignContent.js'
import Project from './components/Project.js'
import Widgets from './components/Widgets.js'
import Work from './components/Work.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'
import { Button } from './components/Styled.js'

import resume from './assets/resume/tech-resume.pdf'

function App() {
  const scrollRef = useRef(null)
  const scrollY = useSelector(state => state.scrollY)

  const handleScroll = _.throttle(() => {
    store.dispatch(updateScroll(scrollRef.current.scrollTop))
  }, 50)
  
  return (
    <div className="App">
      <ContactBar>
        <NavItem href={resume} download>
          <Button>Resume</Button>
        </NavItem>
        <NavItem style={{marginLeft: "10px"}} href="#contact">
          <Button>Contact</Button>
        </NavItem>
      </ContactBar>
      <Main>
        <ScrollWrap ref={scrollRef} onScroll={handleScroll}>
          <div style={{ hieght: "100%", position: "relative", zIndex: "5"}}>
            <Hero scrollPos={scrollY} />
          </div>
          <div style={{height: "100%", position: "relative", overflow: "visible", zIndex: "4"}}>
            <Project />
          </div>
          <div style={{height: "100%", position: "relative", overflow: "visible", zIndex: "3"}}>
            <Widgets />
          </div>
          <div style={{height: "100%", position: "sticky", top: "0px", overflow: "visible", zIndex: "2"}}>
            <DesignTitle />
          </div>
          <DesignContent />
          <Work />
          <Skills />
          <Contact />
        </ScrollWrap>
      </Main>
    </div>
  );
}

const ContactBar = styled.div`
  background-color: #414141;
  width: 100%;
  height: 60px;
  padding-right: 120px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: auto auto;
    padding-right: 0px;
  }
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
const NavItem = styled.a`
  justify-self: right;
  @media (max-width: 900px) {
    justify-self: center;
  }
`

export default App;
