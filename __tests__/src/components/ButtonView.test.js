import React from 'react'
import renderer from 'react-test-renderer'
import ButtonView from '../../../src/components/ButtonView.js'
import 'jest-styled-components'
// import { AsyncStorage } from 'react-native'

test('renders correctly', () => {
  const tree = renderer.create(<ButtonView />).toJSON()
  expect(tree).toMatchSnapshot()
})
let ButtonViewComponent = renderer.create(<ButtonView />).getInstance()
beforeAll(() => {
  ButtonViewComponent.setState({ emojiHappy: true })
})
it('matchEmojiToString and emojiHappy test ', () => {
  // The happy emoji is now pressed:
  ButtonViewComponent.matchEmojiToString('emojiHappy')

  expect(ButtonViewComponent.state.emojiHappy).toEqual(false)
  expect(ButtonViewComponent.state.emojiSad).toEqual(false)
  expect(ButtonViewComponent.state.emojiNeutral).toEqual(false)
  // The happy emoji is pressed again (And should become false)
  ButtonViewComponent.matchEmojiToString('emojiHappy')
  expect(ButtonViewComponent.state.emojiHappy).toEqual(true)
  expect(ButtonViewComponent.state.emojiSad).toEqual(false)
  expect(ButtonViewComponent.state.emojiNeutral).toEqual(false)
})
it('matchEmojiToString and emojiSad test', () => {
  // The sad is now pressed, with the state set true for the happy:
  ButtonViewComponent.matchEmojiToString('emojiSad')
  expect(ButtonViewComponent.state.emojiHappy).toEqual(false)
  expect(ButtonViewComponent.state.emojiSad).toEqual(true)
  expect(ButtonViewComponent.state.emojiNeutral).toEqual(false)

  // The sad is pressed again:
  ButtonViewComponent.matchEmojiToString('emojiSad')
  expect(ButtonViewComponent.state.emojiHappy).toEqual(false)
  expect(ButtonViewComponent.state.emojiSad).toEqual(false)
  expect(ButtonViewComponent.state.emojiNeutral).toEqual(false)
})
it('matchEmojiToString and emojiNatural test', () => {
  // The Neutral emoji is now pressed:
  ButtonViewComponent.matchEmojiToString('emojiNeutral')
  expect(ButtonViewComponent.state.emojiHappy).toEqual(false)
  expect(ButtonViewComponent.state.emojiSad).toEqual(false)
  expect(ButtonViewComponent.state.emojiNeutral).toEqual(true)
  // The neutral emoji is pressed again:
  ButtonViewComponent.matchEmojiToString('emojiNeutral')
  expect(ButtonViewComponent.state.emojiHappy).toEqual(false)
  expect(ButtonViewComponent.state.emojiSad).toEqual(false)
  expect(ButtonViewComponent.state.emojiNeutral).toEqual(false)
  // The neutral emoji is pressed again (and set to true):
  ButtonViewComponent.matchEmojiToString('emojiNeutral')
  expect(ButtonViewComponent.state.emojiHappy).toEqual(false)
  expect(ButtonViewComponent.state.emojiSad).toEqual(false)
  expect(ButtonViewComponent.state.emojiNeutral).toEqual(true)
  ButtonViewComponent.saveData()
})
afterAll(() => {
  it('save and fetch data', () => {
    // saveDate is already called.
    ButtonViewComponent.fetchData()
    expect(this.state.emojiNeutral).toEqual(true)
  })
})
