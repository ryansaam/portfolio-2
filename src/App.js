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

const ContactBar = styled.div`
  background-color: #414141;
  width: 100%;
  height: 60px;
  padding-right: 120px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
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

function App() {
  const scrollRef = useRef(null)
  const scrollY = useSelector(state => state.scrollY)

  const handleScroll = _.throttle(() => {
    store.dispatch(updateScroll(scrollRef.current.scrollTop))
  }, 50)
  
  return (
    <div className="App">
      <ContactBar>
        <a style={{justifySelf: "right"}} href={resume} download>
          <Button style={{backgroundColor: "#F9F9F9", color: "black"}}>Resume</Button>
        </a>
        <a style={{justifySelf: "right", marginLeft: "10px"}} href="#contact">
          <Button style={{backgroundColor: "#F9F9F9", color: "black"}}>Contact</Button>
        </a>
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

export default App;
