import React, { Component } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native'
import { Pedometer } from 'expo'
import { Text } from 'react-native'

Object.size = (obj) => {
  var size = 0; var key
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++
  }
  return size
}

export default class PedometerGraph extends Component {
  constructor () {
    super()
    this.getData()
  }
    state = {
      stepData: []
    }
  weekday = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat']
  async getData () {
    var start = new Date()
    var end = new Date()
    for (let x = 0; x < end.getDay(); x++) {
      let dif = end.getDay() - x
      start.setDate(end.getDate() - dif)
      this.setState({
        stepData: this.state.stepData.concat({
          x: this.weekday[x],
          y: await Pedometer.getStepCountAsync(start, end)
        })
      }, () => { console.log('Updated steps', this.state.stepData) })
    }
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(prevState.stepData[this.weekday[new Date().getDay()]] !== this.state.stepData[this.weekday[new Date().getDay()]])
    if (prevState.stepData[this.weekday[new Date().getDay()]] !== this.state.stepData[this.weekday[new Date().getDay()]]) {
      this.forceUpdate()
    }
  }
  dateCheck () {
    let currentDay = new Date().getDay()
    if (currentDay > 2) {
      return (
        <VictoryChart
          theme={VictoryTheme.material}
          minDomain={{ x: 1, y: 1000 }}
          maxDomain={{ x: 7, y: 6000 }}
        >
          <VictoryLine
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 }
            }}
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' }
            }}
            data={this.state.stepData}
            interpolation="natural"
          />
        </VictoryChart>
      )
    } else {
      return (
        <VictoryChart
          theme={VictoryTheme.material}
          minDomain={{ x: 1, y: 900 }}
          maxDomain={{ x: 7, y: 6000 }}
        >
          <VictoryLine
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 }
            }}
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' }
            }}
            data={[
              { x: 'Sun', y: 2545 },
              { x: 'Mon', y: 1100 },
              { x: 'Tue', y: 4300 },
              { x: 'Wed', y: 1020 },
              { x: 'Thu', y: 3456 },
              { x: 'Fri', y: 5678 },
              { x: 'Sat', y: 3400 }
            ]}
          />
        </VictoryChart>
      )
    }
  }
  render () {
    return this.dateCheck()
  }
}
