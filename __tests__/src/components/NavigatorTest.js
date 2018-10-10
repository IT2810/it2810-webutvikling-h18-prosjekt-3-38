import React from 'react'
import renderer from 'react-test-renderer'
import Navigator from '../../../src/components/Navigator'
import { JestSerializer as test } from 'enzyme-to-json'

test('Rendered correctly', () => {
  const tree = renderer.create(<Navigator/>).toJSON()
  expect(tree).toMatchSnapshot()
})
