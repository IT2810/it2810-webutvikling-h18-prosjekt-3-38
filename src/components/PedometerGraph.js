import React, { Component } from 'react'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native'

export default class PedometerGraph extends Component {
  render () {
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
          data={[
            { x: 'Mon', y: 2303 },
            { x: 'Tus', y: 3344 },
            { x: 'Wed', y: 5453 },
            { x: 'Thur', y: 1432 },
            { x: 'Fra', y: 4237 },
            { x: 'Sat', y: 2918 },
            { x: 'Sun', y: 2423 }
          ]}
          interpolation="natural"
        />
      </VictoryChart>
    )
  }
}
