import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import styled from 'styled-components'
import ButtonView from './ButtonView'
import SvgLogo from './SvgLogo'
import { Asset, Font } from 'expo'
import PedometerSensor from './PedometerSensor'

const StyledBox = styled.View`
  flex: 1; 
  flex-direction:column;
  background-color:#283018;
`
const StyledViewTop = styled.View`
  flex: 1; 
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
  flex: 1; 
  align-items: center;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  background-color:#01364c;
`

export default class FrontDisplayFlexBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Medium': require('../../assets/fonts/Roboto-Bold.ttf')
    }).then(() => {
      this.setState({ fontLoaded: true })
    })
  }
  render() {
    return (
      <StyledBox>
        <StyledViewTop>
          <SvgLogo />
        </StyledViewTop>
        <StyledViewTwo>
          <ButtonView />
          <View>
            {this.state.fontLoaded == true ? (
              <Text style={{ backgroundColor: '#247BA0', fontFamily: 'Roboto-Medium', bottom: 20, fontSize: 20, color: 'black' }}>CHOOSE YOUR MOOD</Text>)
              : <Text>Loading...</Text>}

          </View>
        </StyledViewTwo>
        <StyledViewThree>
          <View>
            {this.state.fontLoaded == true ? (
              <Text style={{ top: 20, alignSelf: 'center', fontFamily: 'Roboto-Medium', fontSize: 20, color: 'white' }}>STEPS TODAY:</Text>) : <Text>Loading...</Text>}
            <PedometerSensor />

          </View>
        </StyledViewThree>
      </StyledBox >
    )
  }
}
