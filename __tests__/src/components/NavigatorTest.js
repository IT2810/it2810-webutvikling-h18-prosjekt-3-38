import React from 'react'
import renderer from 'react-test-renderer'
import Navigator from '../../../src/components/Navigator'
import FrontDisplayFlexBox from '../../../src/components/FrontDisplayFlexBox'

// test('Rendered correctly', () => {
//  const tree = renderer.create(<Navigator />).toJSON()
//  expect(tree).toMatchSnapshot()
// })

let NavigatorComponent = renderer.create(<Navigator />).getInstance()
beforeAll(() => {
  NavigatorComponent.navigate('Home')
})
it('Expect screen to be home', () => {
  expect(NavigatorComponent.children).toBe(<FrontDisplayFlexBox />)
})
