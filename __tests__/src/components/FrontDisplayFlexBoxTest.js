import React from 'react'
import renderer from 'react-test-renderer'
import FrontDisplayFlexBox from '../../../src/components/FrontDisplayFlexBox.js'

test('renders correctly', () => {
  const tree = renderer.create(<FrontDisplayFlexBox />).toJSON()
  expect(tree).toMatchSnapshot()
})
