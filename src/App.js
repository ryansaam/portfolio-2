import React, { useState, useEffect } from 'react'
import './App.css'
import _ from 'lodash'
import disableScroll from 'disable-scroll'
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
import { Button, Icon } from './components/Styled.js'

import resume from './assets/resume/tech-resume.pdf'
import downloadIcon from './assets/vectors/download-icon.svg'

function App() {
  const scrollY = useSelector(state => state.scrollY)

  useEffect(() => {
    window.addEventListener("resize", _.throttle(() => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, 1000))
    window.addEventListener("scroll",() => {
      store.dispatch(updateScroll(window.scrollY))
    })
    return () => {
      window.removeEventListener("resize")
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div style={{height: `calc(,1vh)`}} className="App">
      <ContactBar>
        <NavItem href={resume} download>
          <Button>
            <span style={{display: "inline-block", marginRight: "5px"}}>Resume</span>
            <Icon inline style={{height: "20px", width: "20px", margin: "0px", transform: "translateY(5px)"}} src={downloadIcon}/>
          </Button>
        </NavItem>
        <NavItem style={{marginLeft: "10px"}} href="#contact">
          <Button>Contact</Button>
        </NavItem>
      </ContactBar>
      <div style={{hieght: "100%", position: "relative", zIndex: "5"}}>
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
      <div>
        <DesignContent />
        <Work />
        <Skills />
        <Contact />
      </div>
      <ScreenWarning />
    </div>
  );
}

const ScreenWarning = props => {
  const [toggle, setToggle] = useState(0b1)
  if (toggle && window.innerWidth < 1030)
    disableScroll.on()
  else
    disableScroll.off()
  return (
    <ScreenWarningWrap style={{display: (toggle && window.innerWidth < 1030) ? "grid": "none"}}>
      <Prompt>
        <div style={{display: "grid", gridGap: "10px"}}>
          <span>
            <h1 style={{color: "#a1a1a1", fontSize: "1.3em", fontWeight:"600", marginRight: "10px", display: "inline"}}>
              Mobile Warning:
            </h1>
            <P>This site has been modified to fit your screen size.</P>
          </span>
          <P>{warnText}</P>
          <Button onClick={() => setToggle(!toggle)}>Continue</Button>
        </div>
      </Prompt>
    </ScreenWarningWrap>
  )
}
const ScreenWarningWrap = styled.div`
  background-color: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  z-index: 22;
  display: grid;
  align-items: center;
  justify-items: center;
`
const Prompt = styled.div`
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  max-width: 600px;
  padding: 40px;
  box-sizing: border-box;
  border: 3px solid #a1a1a1;
  border-radius: 20px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
`
const P = styled.p`
  color: white;
  font-size: 1.2em;
  margin: 0px;
  display: inline;
`
const warnText = `
  I spent a lot of time to learn the skills to
  make this site. I ask you if you're using a
  mobile or a small monitor device, please view
  on a laptop or desktop computer for the best
  experience. If you're using an iPad or similar
  tablet try turning your device sideways. 
`

const ContactBar = styled.div`
  background-color: #414141;
  width: 100%;
  height: 60px;
  padding-right: 120px;
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  z-index: 20;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: auto auto;
    padding-right: 0px;
  }
`
const NavItem = styled.a`
  justify-self: right;
  @media (max-width: 900px) {
    justify-self: center;
  }
`

export default App;
