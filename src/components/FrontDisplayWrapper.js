import React from 'react'
import styled from 'styled-components'
import Navigator from './Navigator'

const StyledBox = styled.View`
  flex: 1; 
  flex-direction:column;
`

export default class FrontDisplayWrapper extends React.Component {
  render () {
    return (
      <StyledBox>
        <Navigator style={{ color: 'grey' }}/>
      </StyledBox>
    )
  }
}
