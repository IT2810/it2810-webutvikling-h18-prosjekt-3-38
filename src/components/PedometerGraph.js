import React, { Component } from 'react'
import { VictoryChart, VictoryLine } from 'victory-native'
import { Pedometer } from 'expo'
import { View, TextInput, AsyncStorage } from 'react-native'
import styled from 'styled-components'

const StyledBox = styled.View`
  flex: 1; 
  flex-direction:column;
  align-items: center;
  justify-content: center;
`
const GraphView = styled.View`
  flex: 0.7; 
  flex-direction:column;
  align-items: center;
  justify-content:center;
  padding-left: 6%;
  top: -20;
`

const StyledInputText = styled.TextInput`
  background-color: #247ba0;
  font-family: 'Roboto-Medium';
  color: white;
  font-size: 15;
  border-radius: 20;
  bottom: -20;
  width: 250;
  text-align: center;
  flex: 0.1; 
  flex-direction:column;
  background-color:#01364c;
  align-items: center;
  justify-content:center;
`

export default class PedometerGraph extends Component {
  constructor () {
    super()
    this.getData()
    this._retrieveMotivationData()
  }
  state = {
    stepData: [],
    motivationData: []
  }
  weekday = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat']
  /*
    Retrieves data for the current day and previous days.
    The first day of the week is Sunday and it will only display data
    for the current week.
  */
  async getData () {
    let start = new Date()
    let end = new Date()
    let today = new Date()
    for (let x = 0; x < today.getDay(); x++) {
      let dif = end.getDay() - x
      start.setDate(end.getDate() - dif)
      end.setDate(start.getDate() + 1)
      this.setState({
        stepData: this.state.stepData.concat({
          x: this.weekday[x],
          // Retrieve pedometer data with the expo pedometer api
          y: await Pedometer.getStepCountAsync(start, end)
            .catch((err) => Promise.reject(console.log('Error occurred:', err)))
            .then(result => Promise.resolve(result.steps))
        })
      }, () => {
        // Forces component to rerender when the state is updated
        this.forceUpdate()
      })
    }
  }
  // Retrieves motivation data from async storage and loads it into state to draw the goal graph
  _retrieveMotivationData = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('motivationData'))
      // Only set state value is not null
      if (value) {
        this.setState({ motivationData: value })
      } else {
        console.log('the value is null')
      }
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevState.stepData.length !== this.state.stepData.length) {
      this.forceUpdate()
    } else if (prevState.motivationData.length !== this.state.motivationData.length) {
      this.forceUpdate()
    }
  }
  retLineChart (dataSet, strokeColor, key = 0) {
    return (
      <VictoryLine
        animate={{
          duration: 500,
          onLoad: { duration: 500 }
        }}
        style={{
          data: { stroke: strokeColor },
          labels: { fill: '#fff', stroke: '#fff' }
        }}
        data={dataSet}
        interpolation="linear"
        key={key}
      />
    )
  }
  // Renders component based on current day of the week and available data
  dateCheck () {
    let currentDay = new Date().getDay()
    /*
      Checks data array length because of bug in the victory chart library
      which throws an exception whe trying to render a line chart with only one
      data point.
    */
    if (currentDay > 1 && this.state.stepData.length > 1 && this.state.motivationData.length > 1) {
      // Render pedometer line chart and goal line chart
      return (
        [
          this.retLineChart(this.state.stepData, '#c43a31'),
          this.retLineChart(this.state.motivationData, '#32CD32', 1)
        ])
    } else if (currentDay > 1 && this.state.stepData.length > 1) {
      // Render pedometer line chart
      return this.retLineChart(this.state.stepData, '#c43a31')
    } else if (this.state.motivationData.length > 1) {
      // Or we render line chart with dummy data and motivation data
      return (
        [
          this.retLineChart([ { x: 'Sun', y: 2545 }, { x: 'Mon', y: 1100 }, { x: 'Tus', y: 1945 }, { x: 'Wed', y: 3040 } ], '#c43a31'),
          this.retLineChart(this.state.motivationData, '#32CD32', 1)
        ]
      )
    } else {
      // Or else we render line chart with only dummy data
      return this.retLineChart([{ x: 'Sun', y: 2545 }, { x: 'Mon', y: 1100 }, { x: 'Tus', y: 1945 }, { x: 'Wed', y: 3040 }], '#c43a31')
    }
  }
  // Handles input event
  handleInput (event) {
    const day = new Date().getDay()
    const { text } = event.nativeEvent
    let data = []
    if (text !== '' && day > 1) {
      data = this.state.stepData.map(obj => ({ x: obj.x, y: parseInt(text) }))
    } else if (text !== '') {
      let list = [{ x: 'Sun', y: 2545 }, { x: 'Mon', y: 1100 }, { x: 'Tus', y: 1945 }, { x: 'Wed', y: 3240 }]
      data = list.map(obj => ({ x: obj.x, y: parseInt(text) }))
    }
    this.setState({ motivationData: data }, async () => {
      try {
        if (this.state.motivationData.length > 0) {
          await AsyncStorage.setItem('motivationData', JSON.stringify(this.state.motivationData))
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    })
  }
  render () {
    return (
      <StyledBox>
        <GraphView >
          <VictoryChart
            style={{ labels: { stroke: '#fff', fontSize: 20 } }}
          >
            {this.dateCheck()}
          </VictoryChart>
        </GraphView>
        <StyledInputText
          onChange={(event) => this.handleInput(event)}
          returnKeyType='send'
          placeholder='Enter goal here'
          placeholderTextColor='#fff'
          clearTextOnFocus={true}
          keyboardType='numeric'
          maxLength = {5}
          defaultValue=''
          underlineColorAndroid='#01364c'
        />
      </StyledBox>
    )
  }
}
