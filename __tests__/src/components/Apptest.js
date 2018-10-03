import 'react-native'
import React from 'react'
import {shallow} from 'enzyme'
import App from '../../../src/components/App'

test('Check if renders correctly', () => {
    const meme = shallow(<App />)

    // let tree = component.toJSON();
    expect(meme).toMatchSnapshot();
})