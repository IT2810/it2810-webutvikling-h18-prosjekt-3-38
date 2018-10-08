import React, { Component } from 'react'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native'
import { Pedometer } from 'expo'

export default class PedometerGraph extends Component {
  constructor () {
    super()
    this.getData()
    console.log(this.state.stepData)
  }
  state = {
    stepData: {}
  }
  weekday = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat']
  async getData () {
    var d = new Date()
    for (let x = 0; x <= d.getDay(); x++) {
      let dif = d.getDay() - x
      this.setState({
        stepData: {
          x: this.weekday[x],
          y: await Pedometer.getStepCountAsync(d.getDay(), d.getDay() - dif)
        }
      })
    }
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevState.stepData[this.weekday[new Date().getDay()]] !== this.state.stepData[this.weekday[new Date().getDay()]]) {
      this.forceUpdate()
    }
  }
  render () {
    var data = this.this.state.stepData || [{ x: 'test', y: 2456 }]
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
          data={data}
          interpolation="natural"
        />
      </VictoryChart>
    )
  }
}
