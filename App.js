import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

const StyledViewContainer = styled.View`
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center'
`

export default class App extends React.Component {
  render () {
    return (
      <StyledViewContainer>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>What a memer!</Text>
      </StyledViewContainer>
    )
  }
}
