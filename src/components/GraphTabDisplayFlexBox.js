import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'
import SvgLogo from './SvgLogo'
import { Asset, Font } from 'expo'

const StyledBox = styled.View`
  flex: 1; 
  flex-direction:column;
  background-color:#01364c;
`
const StyledViewTop = styled.View`
  flex: 0.5; 
  flex-direction:column;
  background-color:#01364c;
  align-items: center;
  justify-content:center;
`
const StyledViewTwo = styled.View`
  flex: 1; 
  align-items: center;
  flex-direction:column;
  background-color:#247BA0;
  align-items: center;
  justify-content:center;
`
const StyledViewThree = styled.View`
  flex: 0.75; 
  align-items: center;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  background-color:#247BA0;
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
          <SvgLogo />
        </StyledViewTop>
        <StyledViewTwo>
          <Text>Graph goes here</Text>
        </StyledViewTwo>
        <StyledViewThree>
          <View>
            {this.state.fontLoaded == true ? (
              <Text style={{
                backgroundColor: '#247BA0',
                fontFamily: 'Roboto-Medium',
                color: 'white',
                bottom: 20,
                fontSize: 25
              }}>STEPS WALKED THIS WEEK</Text>)
              : <Text>Loading...</Text>}
          </View>
          <Text></Text>
        </StyledViewThree>
      </StyledBox>
    )
  }
}
