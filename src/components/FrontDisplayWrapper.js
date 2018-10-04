import React from 'react'
import FlexBox from './FlexBox'
import styled from 'styled-components'
import BottomNav from './BottomNav'

const StyledBox = styled.View`
  flex: 1; 
  flex-direction:column;
`

export default class FrontDisplayWrapper extends React.Component {
  render () {
    return (
      <StyledBox>
        <FlexBox />
        <BottomNav/>
      </StyledBox>
    )
  }
}
