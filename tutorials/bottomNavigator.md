# Material UI bottom navigator

### [Back to README](https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-3-38/new/issue/34/readme/README.md/)

## Dependencies:
* react 
* react-native
* react-navigation-material-bottom-tabs

## Install:
To use the [createMaterialBottomTabNavigator](https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html)
component, we first need to install the `react-navigation-material-bottom-tabs` library and 
`react-native-paper` which the former is based upon. With yarn:

```javascript
yarn add react-navigation-material-bottom-tabs react-native-paper
```

or with npm:

```javascript
npm install react-navigation-material-bottom-tabs react-native-paper --save
```

## Usage:

```javascript
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navignavigation ation-material-bottom-tabs'
```
Here we import the relevant libraries. 
After installing the libraries needed we need only import 
React from the react library as well as our navigation component from the react-navigation-material-bottom-tabs 
library.

```javascript
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

export default createMaterialBottomTabNavigator({
  globalNews: { 
     screen: GlobalNews,
     navigationOptions: {
        tabBarLabel: 'Global News',
     }
  },
  sports: { 
      screen: Sports,
      navigationOptions: {
        tabBarLabel: 'Sports',
     }
  },
  culture: { 
      screen: Culture,
      navigationOptions: {
        tabBarLabel: 'Culture',
     }
  }
}, {
  initialRouteName: 'GlobalNews',
  activeColor: 'red',
  inactiveColor: 'grey',
  barStyle: { backgroundColor: 'lightblue' },
});
```

As you can see from the above code, we are creating a navigation component for a news application. 
The application has three screens; one for global news, sports and culture. 
We start by creating the component and adding three routes to it; globalNews, sports and culture which contain a react component
for each of the screens we wish to navigate to. In this case we might have components GlobalNews, Sports and Culture which contain 
all UI elements for displaying their respective sections. We also add a label that will show for each tab in the navigator. 
The routes correspond to the tabs which will be in the navigator.

```javascript
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Text, View } from 'react-native'

... // createMaterialBottomTabNavigator from previous code

export default class GlobalNews extends React.Component {
  render() {
   return (
    <View>
      <Text>This is the global news section</Text>
    </View>
   )
  }
}

export default class Sports extends React.Component {
  render() {
   return (
    <View>
      <Text>This is the sports section</Text>
    </View>
   )
  }
}

export default class Culture extends React.Component {
  render() {
   Return (
    <View>
      <Text>This is the culture section</Text>
    </View>
   )
  }
}
```

Next we have added the components that will show when a tab is selected. 
They will use the View and Text components to show some text so these react components will also need to be imported. 
If you followed the steps you should now have a working navigator!
