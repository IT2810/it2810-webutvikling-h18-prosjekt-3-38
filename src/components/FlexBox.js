import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import ButtonView from './ButtonView'
import BottomNav from './BottomNav'

const StyledBox = styled.View`
  flex: 1; 
  flex-direction:column;
  background-color:#283018;
`
const StyledViewTop = styled.View`
  flex: 1; 
  flex-direction:column;
  background-color:#247BA0;
  align-items: center;
  justify-content:center;
  

`
const StyledViewTwo = styled.View`
  flex: 1; 
  align-items: center;
  flex-direction:column;
  background-color:#70C1B3;
  align-items: center;
  justify-content:center;
`
const StyledViewThree = styled.View`
  flex: 1; 
  align-items: center;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  background-color:#B2DBBF;


`

export default class FlexBox extends React.Component {
  render () {
    return (
      <StyledBox>
        <StyledViewTop>
          <Text>HELLO</Text>
        </StyledViewTop>
        <StyledViewTwo>
          <ButtonView />
        </StyledViewTwo>
        <StyledViewThree>
          <Text>HELLO</Text>
        </StyledViewThree>
        <BottomNav/>
      </StyledBox>
    )
  }
}
