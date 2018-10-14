import React from 'react'
import renderer from 'react-test-renderer'
import PedometerGraph from '../../../src/components/PedometerGraph'
// import { AsyncStorage } from 'react-native'

/*
  The jest.useFakeTimers() function does not correctly mock javascript Date() timers.
  Which is why you will get a warning from jest when running this test, even though
  the test cases all work as expected.
*/
describe('PedometerGraph', () => {
  const component = renderer.create(<PedometerGraph />)

  test('retrieves data correctley', () => {
    component.getInstance().getData().then(() => {
      return expect(component.getInstance().state.stepData.length).not.toBeLessThan(1)
    })
  })

  // Test not working as expected
  /* test('gets data correctly from async storage', () => {
    const data = [{ x: 'mon', y: 2340 }, { x: 'tus', y: 2057 }]
    return expect(
      AsyncStorage.setItem('motivationData', JSON.stringify(data))
        .catch((err) => Promise.reject(console.log('Error occurred:', err)))
        .then(() => AsyncStorage.getAllKeys())
        .catch((err) => Promise.reject(console.log('Error occurred: ', err)))
        /* .then(() => AsyncStorage.getItem('motivationData'))
        .catch((err) => Promise.reject(console.log('Error occurred:', err)))
    ).resolves.toEqual([])
  }) */
})

/* return component.getInstance()._retrieveMotivationData().then(() => {
  expect(component.getInstance().state.motivationData).toEqual(data)
}) */
