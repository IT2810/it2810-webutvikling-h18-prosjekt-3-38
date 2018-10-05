import React from 'react'
import FrontDisplayFlexBox from './FrontDisplayFlexBox'
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
        <FrontDisplayFlexBox/>
        <BottomNav/>
      </StyledBox>
    )
  }
}
