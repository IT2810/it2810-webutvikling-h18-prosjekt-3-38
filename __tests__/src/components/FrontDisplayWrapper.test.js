import React from 'react'
import renderer from 'react-test-renderer'
import FrontDisplayWrapper from '../../../src/components/FrontDisplayWrapper.js'

test('renders correctly', () => {
  const tree = renderer.create(<FrontDisplayWrapper />).toJSON()
  expect(tree).toMatchSnapshot()
})
