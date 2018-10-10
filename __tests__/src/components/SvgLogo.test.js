import React from 'react'
import renderer from 'react-test-renderer'
import SvgLogo from '../../../src/components/SvgLogo.js'

test('renders correctly', () => {
  const tree = renderer.create(<SvgLogo />).toJSON()
  expect(tree).toMatchSnapshot()
})
