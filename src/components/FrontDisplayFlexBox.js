import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import ButtonView from './ButtonView'

const StyledBox = styled.View`
  flex: 1; 
  flex-direction:column;
  background-color:#283018;
`
const StyledViewTop = styled.View`
  flex: 1; 
  flex-direction:column;
  background-color:#5DBEB4;
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
  background-color:#F0F3BD;
`

export default class FrontDisplayFlexBox extends React.Component {
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
          <Text >HELOOO</Text>
        </StyledViewThree>
      </StyledBox >
    )
  }
}
