import React from 'react'
import renderer from 'react-test-renderer'
import PedometerGraph from '../../../src/components/PedometerGraph'

/*
jest.useFakeTimers() does not correctly mock javascript Date() timers.
*/
describe('PedometerGraph', () => {
  const component = renderer.create(<PedometerGraph />)

  test('renders correctley', () => {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('retrieves data correctley', () => {
    component.getInstance().getData().then(() => {
      expect(component.getInstance().state.stepData.length).not.toBeLessThan(1)
    })
  })
})
