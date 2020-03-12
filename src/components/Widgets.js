import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Slide, H1, Button } from './Styled.js'
import { Scheduler, MyForm, colorTheme } from '../scheduler'
import { Calendar } from '../calendar'

const Widgets = props => {

  return (
    <WidgetsWrap>
      <Slide style={{height: "calc(100vh - 60px)", position: "sticky", top: "0px"}} >
        <Container>
          <div style={{display: "grid", gridGap: "20px"}}>
            <H1 center em={window.innerWidth > 525 ? 2.8 : 1.6}>Calendar Widgets</H1>
            <GridLayout>
              <Block style={{display: (window.innerWidth < 700) ? "none" : "grid"}}>
                <CalendarGrid>
                  <H1 em={1.4}>Colorful Calendar</H1>
                  <Calendar
                    width={260}
                    date={new Date()}
                    colors={colorTheme.purplenight}
                  />
                  <a href="https://github.com/ryansaam/colorful-calendar-v2" target="_blank" rel="noopener noreferrer">
                    <Button>Github</Button>
                  </a>
                </CalendarGrid>
              </Block>
              <Text style={{display: (window.innerWidth > 1220 || window.innerHeight > 912 ) ? "block" : "none"}}>
                <p>
                  {text}
                </p>
              </Text>
              <SpecialBlock>
                <CalendarGrid>
                  <H1 em={1.4}>Schedule Me</H1>
                  <Scheduler
                    width={window.innerHeight > 720 ? 260 : 200}
                    date={new Date()}
                    colors={colorTheme.redflat}
                    form={<MyForm />}
                  />
                  <a href="https://github.com/ryansaam/schedule-me-v2" target="_blank" rel="noopener noreferrer">
                    <Button>Github</Button>
                  </a>
                </CalendarGrid>
              </SpecialBlock>
            </GridLayout>
          </div>
        </Container>
      </Slide>
    </WidgetsWrap>
  )
}

const text = `
  My first project. The idea came from when I worked at Amazon as a Packer. They had
  this calendar in the employee portal that you could use to schedule PTO. After a month
  of learning JavaScript it came to me that I should build one myself. Calendars, exciting right?
  These are actually the third iteration of them. At first I used the old popular JavaScript
  library JQuery. My function that generated the month's corisponding dates was over 100 lines
  long with O(n^2) time complexity. Then I choose to learn React.js. With my exeprience by then
  I was able to shorten that function from 100+ lines to just 35 with an O(n) time complexity.
  The third iteration came about when the React team released React Hooks. So I rewrote the
  entire codebase using functional components and hooks. Try them out yourself by clinking on the
  arrows. The one on the left is just a normal calendar but the one on the right is a scheduler.
  Try clicking on the dates, you will see a form. Don't worry your info doesn't get sent anywhere,
  but you will see a promt on the screen that shows you what you entered for testing.
`

const WidgetsWrap = styled.div`
  height: 200%;
  position: relative;
  top: -100%;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: grid;
  align-items: center;
  justify-items: center;
  @media (max-width: 1220px) {
    padding: 20px;
  }
`
const GridLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-items: center;
  grid-gap: 20px;
  @media (max-width: 1220px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
  }
`
const Block = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`
const SpecialBlock = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  @media (max-width: 1220px) {
    grid-column: 2/3;
  }
  @media (max-width: 700px) {
    grid-column: 1/3;
  }
`
const CalendarGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  align-items: start;
  justify-items: center;
  grid-gap: 20px
`
const Text = styled.div`
  color: white;
  font-size: 1.4em;
  text-align: center;
  @media (max-width: 1340px) {
    font-size: 1.2em;
  }
  @media (max-width: 1220px) {
    grid-row: 2/3;
    grid-column: 1/3;
    font-size: 1em;
    justify-self: center;
  }
  @media (max-width: 980px) {
    font-size: 0.8em;
  }
  @media (max-width: 670px) {
    font-size: 0.6em;
  }
  @media (max-width: 380px) {
    font-size: 0.4em;
  }
`

export default Widgets