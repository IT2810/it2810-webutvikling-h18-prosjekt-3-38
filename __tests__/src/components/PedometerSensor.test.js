import React from 'react'
import renderer from 'react-test-renderer'
import PedometerSensor from '../../../src/components/PedometerSensor'

describe('PedometerSensor', () => {
  const component = renderer.create(<PedometerSensor></PedometerSensor>)

  test('renders correctly', () => {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('has correct initial state', () => {
    expect(component.getInstance().state.isPedometerAvailable).toBe('checking')
  })

  test('updated state correctly', () => {
    component.getInstance().setState(
      {
        pastStepCounter: 3,
        currentStepCounter: 5
      })

    expect(component.getInstance().state.pastStepCounter).toBe(3)
    expect(component.getInstance().state.currentStepCounter).toBe(5)
  })
})
