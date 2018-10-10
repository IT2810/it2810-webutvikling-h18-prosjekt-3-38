import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Pedometer } from 'expo'
import styled from 'styled-components'

const StyledView = styled.View`
  flex: 1;
  margin-top: 15;
  align-items: center;
  justify-content: center;
`

export default class PedometerSensor extends Component {
  state = {
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount: 0
  }

  // Subscribes when component is mounted
  componentDidMount () {
    this._subscribe()
  }

  // Unsubscribes when component is unmounted
  componentWillUnmount () {
    this._unsubscribe()
  }

  // Makes all the expo api calls to retrieve pedometer data
  _subscribe = () => {
    // Gets live feed of current step count and changes state
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      })
    })

    // Checks if the pedometer is available
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
    
    // Gets past step count from previous day
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
        {console.log(this.state.isPedometerAvailable)}
        <Text>
            Steps taken in the last 24 hours: {this.state.pastStepCount}
        </Text>
        <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>
      </StyledView>
    )
  }
}
