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
  font-size: 1.4em;
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
Quisque eget tincidunt ipsum. Curabitur aliquet blandit nisi, at aliquam quam. 
Sed tempor egestas facilisis. Sed a diam a ipsum vehicula iaculis vitae eget quam. 
Morbi vulputate laoreet finibus. Phasellus varius lobortis ligula eget lacinia. Praesent blandit, 
lectus et porta vehicula, ante risus accumsan leo, ut aliquet diam augue eleifend libero. Nam 
dapibus hendrerit risus at blandit. Nulla facilisi. Nulla imperdiet, neque ac sodales scelerisque, 
ex tellus mattis nulla, eget auctor tortor justo eget neque. Donec convallis nulla eu diam 
tristique, nec efficitur libero rhoncus.
`

export default Widgets