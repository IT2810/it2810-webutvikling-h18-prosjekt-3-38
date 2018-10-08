import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import FrontDisplayFlexBox from './FrontDisplayFlexBox'
import GraphTabDisplayFlexBox from './GraphTabDisplayFlexBox'
import { Entypo } from '@expo/vector-icons/'
import PropTypes from 'prop-types'

HomeIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
}

GraphIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
}

function HomeIcon ({ tintColor }) {
  return (<Entypo name='home' size={25} color={tintColor} />)
}

function GraphIcon ({ tintColor }) {
  return (<Entypo name='line-graph' size={25} color={tintColor} />)
}

const Navigator = createMaterialBottomTabNavigator({
  Home: {
    screen: FrontDisplayFlexBox,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: HomeIcon,
      barStyle: {
        backgroundColor: '#247BA0'
      }
    }
  },
  Graph: { screen: GraphTabDisplayFlexBox,
    navigationOptions: {
      tabBarLabel: 'Graph',
      tabBarIcon: GraphIcon,
      barStyle: {
        backgroundColor: '#5fa55a'
      }
    }
  }
}, {
  initialRouteName: 'Home',
  activeTintColor: '#f6d51f',
  inactiveTintColor: 'lightgrey'
})

export default Navigator
