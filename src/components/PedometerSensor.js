import React from 'react'
import { Pedometer } from 'expo'
import { Text, View } from 'react-native'
import styled from 'styled-components'
import { Asset, Font } from 'expo'

const StyledView = styled.View`
  flex: 1;
  margin-top: 15;
  align-items: center;
  justify-content: center;
`

export default class PedometerSensor extends React.Component {
  state = {
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount: 0,
    fontLoaded: false

  }

  async componentDidMount () {
    this._subscribe()

    await Font.loadAsync({
      'Roboto-Medium': require('../../assets/fonts/Roboto-Bold.ttf')
    }).then(() => {
      this.setState({ fontLoaded: true })
    })
  }

  componentWillUnmount () {
    this._unsubscribe()
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      })
    })

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        })
      },
      error => {
        this.setState({
          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error
        })
      }
    )

    const end = new Date()
    const start = new Date()
    start.setDate(end.getDate() - 1)
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps })
      },
      error => {
        this.setState({
          pastStepCount: 'Could not get stepCount: ' + error
        })
      }
    )
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove()
    this._subscription = null
  }

  render () {
    return (
      <StyledView>
        <View>
          {this.state.fontLoaded == true ? (<Text style={{ backgroundColor: '#01364c', fontFamily: 'Roboto-Medium', bottom: 20, fontSize: 20, color: 'white' }}>Walk! And watch this go up:</Text>)
            : <Text>Loading...</Text>}
        </View>
        <View>
          {this.state.fontLoaded == true ? (<Text style={{ backgroundColor: '#01364c', fontFamily: 'Roboto-Medium', bottom: 20, fontSize: 20, color: 'white' }}>
            <Text style={{fontSize: 50}}>{ this.state.currentStepCount}</Text>
          </Text>)
            : <Text>Loading...</Text>}
        </View>
      </StyledView>
    )
  }
}
