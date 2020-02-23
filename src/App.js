import React, { useRef } from 'react'
import './App.css'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import store from './store.js'
import { updateScroll } from './actions.js'
import _ from 'lodash'
import Hero from './components/HeroSlide.js'
import DesignContent from './components/DesignContent.js'
import DesignTitle from './components/DesignTitle.js'
import Project from './components/Project.js'
import Widgets from './components/Widgets.js'
import Work from './components/Work.js'
import { Button } from './components/Styled.js'

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

function App() {
  const scrollRef = useRef(null)
  const scrollY = useSelector(state => state.scrollY)

  const handleScroll = _.throttle(() => {
    store.dispatch(updateScroll(scrollRef.current.scrollTop))
  }, 50)
  
  return (
    <div className="App">
      <ContactBar>
        <Button style={{backgroundColor: "#F9F9F9", color: "black"}} move={"right"}>Contact</Button>
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
        </ScrollWrap>
      </Main>
    </div>
  );
}

export default App;
