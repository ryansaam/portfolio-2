import React from 'react'
import styled from 'styled-components'

import { Slide, H1, Button } from './Styled.js'
import { Scheduler, MyForm, colorTheme } from '../scheduler'
import { Calendar } from '../calendar'


const WidgetsWrap = styled.div`
  height: 200%;
  position: relative;
  top: -100%;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 80px auto;
`
const GridLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  grid-gap: 20px;
`
const Text = styled.div`
  color: white;
  font-size: 1.2em;
  grid-row: 1/4;
  grid-column: 2/3;
`
const Row2 = styled.div`
  grid-row: 2/3;
`

const Widgets = props => {

  return (
    <WidgetsWrap>
      <Slide style={{height: "calc(100vh - 60px)", position: "sticky", top: "0px"}} >
        <Container>
          <H1 em={2.8}>Calendar Widgets</H1>
          <GridLayout>
            <H1 style={{gridRow: "1/2"}} em={1.4}>Colorful Calendar</H1>
            <H1 style={{gridRow: "1/2", gridColumn: "3/4"}} em={1.4}>Schedule Me</H1>
            <Row2>
              <Calendar
                width={300}
                date={new Date()}
                colors={colorTheme.purplenight}
              />
            </Row2>
            <Text>
              <p>
                {text}
              </p>
            </Text>
            <Row2 style={{gridColumn: "3/4"}}>
              <Scheduler
                width={300}
                date={new Date()}
                colors={colorTheme.redflat}
                form={<MyForm />}
              />
            </Row2>
            <Button style={{gridRow: "3/4"}}>Github</Button>
            <Button style={{gridRow: "3/4", gridColumn: "3/4"}}>Github</Button>
          </GridLayout>
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

export default Widgets