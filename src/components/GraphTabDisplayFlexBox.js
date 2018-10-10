import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'
import { Font } from 'expo'
import PedometerGraph from './PedometerGraph'

const StyledBox = styled.View`
  flex: 1; 
  flex-direction:column;
  background-color:#01364c;
`
const StyledViewTop = styled.View`
  flex: 0.2; 
  flex-direction:column;
  background-color:#01364c;
  align-items: center;
  justify-content:center;
`
const StyledViewTwo = styled.View`
  flex: 0.8; 
  align-items: center;
  flex-direction:column;
  background-color:#247BA0;
  align-items: center;
  justify-content:center;
`

const StyledViewThree = styled.View`
  flex: 0.6; 
  align-items: center;
  flex-direction:column;
  background-color:#247BA0;
  align-items: center;
  justify-content:center;
  padding-left: 6%;
`

const Title = styled.Text`
  font-family: 'Roboto-Medium';
  color: white;
  font-size: 25;
  top: 7;
`

export default class GraphTabDisplayFlexBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }
  async componentDidMount () {
    await Font.loadAsync({
      'Roboto-Medium': require('../../assets/fonts/Roboto-Bold.ttf')
    }).then(() => {
      this.setState({ fontLoaded: true })
    })
  }
  render () {
    return (
      <StyledBox>
        <StyledViewTop>
          <View>
            {this.state.fontLoaded === true ? (
              <Title>Steps taken this week</Title>)
              : <Text>Loading...</Text>}
          </View>
        </StyledViewTop>
        <StyledViewTwo>
          <PedometerGraph/>
        </StyledViewTwo>
        <StyledViewThree/>
      </StyledBox>
    )
  }
}
