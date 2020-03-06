import React from 'react'
import styled from 'styled-components'

import { Slide, H1, Button } from './Styled.js'
import { Scheduler, MyForm, colorTheme } from '../scheduler'
import { Calendar } from '../calendar'

const Widgets = props => {
  return (
    <WidgetsWrap>
      <Slide style={{height: "calc(100vh - 60px)", position: "sticky", top: "0px"}} >
        <Container>
          <H1 em={2.8}>Calendar Widgets</H1>
          <GridLayout>
            <Block>
              <CalendarGrid>
                <H1 em={1.4}>Colorful Calendar</H1>
                <Calendar
                  width={300}
                  date={new Date()}
                  colors={colorTheme.purplenight}
                />
                <Button style={{}}>Github</Button>
              </CalendarGrid>
            </Block>
            <Text>
              <p>
                {text}
              </p>
            </Text>
            <Block>
              <CalendarGrid>
                <H1 em={1.4}>Schedule Me</H1>
                <Scheduler
                  width={300}
                  date={new Date()}
                  colors={colorTheme.redflat}
                  form={<MyForm />}
                />
                <Button>Github</Button>
              </CalendarGrid>
            </Block>
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
  grid-template-rows: 80px auto;
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
  }
`

export default Widgets