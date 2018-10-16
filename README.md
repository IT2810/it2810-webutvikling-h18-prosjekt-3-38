# Web development project 3 (IT2810)
This is the repository for our third project in web development. This project was centered around creating a mobile application using
react-native and the expo API. The app was to be independent of mobile platforms and include some form of user interaction/input
implemented with at least one of the expo APIs.

# Introduction to MoodWalker
The MoodWalker is an app for tracking your steps as well as your mood. Each day the app asks you what mood you are in and logs it along with the steps you make this day. The app allows you to set a daily steps goal and lets you track your progress by visualizing steps taken for each day in the week up against your daily goal.

## Installation instructions
If you want to download and build this project yourself follow these instructions (assumes basic knowledge of git and npm/yarn).
You will need to have [node](https://nodejs.org/en/download/) installed on your computer to run this app.

First clone the github repo to your local computer and `cd` into the root folder. Install all the dependencies using either npm or yarn.
You will also need to install `expo-cli` globally so that you can use the cli to run the application. If you want to be able to run the
tests you will also need to install `jest` globally. To start running the expo server run `npm start` or `yarn start` and to run the tests
run `npm test` or `yarn test`.

## React Native and Expo technology

### React Native
For this project, we were asked to use React Native to build a mobile application. React Native is a JavaScript framework for rendering applications natively. It is based on the JS library React. This makes it easier for web developers to make apps. Code written in React Native renders using the native APIs, so that Objective-C is ran for iOS devices and Java for Android. This is different to previous methods for creating apps, where a combination of JS, HTML and CSS renders using websites.

### AsyncStorage
AsyncStorage is an asynchronous and persistent storage system that is global to the app. It works the same way as local storage for web. It can be used to for example save login information, so that the user won’t have to write it in every time.
The key methods we used for AsyncStorage were `AsyncStorage.setItem(myKey, “SaveThisString”)` and `AsyncStorage.getItem(myKey)`. A brief tutorial on AsyncStorage can be found [here](../tutorials/asyncstorageTutorial.md/).

### Animated library
We chose to use the Animated library because we wanted to animate our logo when you open the application and because it was already part of the react-native package so no further dependencies were required. A brief introduction to this library and how we used it can be found [here](../tutorials/animatedLibrary.md).

### Expo-CLI
Expo was used to develop the app. It is a set of tools, libraries and services for React native that makes developing easier. Expo gives the developer access to the mobile device’s functionality, like the pedometer sensor used in our app. When yarn start is run, expo produces a QR-code. By downloading “expo” on a mobile device, the app can be previewed by scanning the QR-code. This made testing of the app really easy as we were developing.

### Pedometer API
We are using Expo’s Pedometer API to access the user’s current and past step count. The API utilizes the Core Motion API for Apple and Google Fit API for Android. 

## Third party libraries and components

### Victory
Victory is a library featuring interactive components used to visualize data like pie charts, graphs etc. in react apps. Their work-in-progress library victory-native adds functionality to React Native apps. We use the components VictoryChart and VictoryLine to visualize the user’s weekly progress on steps taken. Remember that expo already includes a version of react-native-svg, therefore this doesn’t need to be installed separately. A brief tutorial can be found [here](../tutorials/victoryTutorial.md/).

### Custom Fonts
We chose to use custom fonts for all text in our application. Roboto-Medium is the one we used. A tutorial to see how custom fonts can be added to your projects can be viewed [here](../tutorials/CustomFonts.md).

### Expo Icons
We chose to use the expo-icons since this library was already installed through expo init. All icons from this library are available at `@expo/vector-icons` directory. Here, we found the emoji icons we needed for our application.

The emoji icons in our application have an onpress function which allows the styling to be changed if the icon is pressed.

### Material UI bottom navigator
We decided to use a tab navigator for navigating between the home screen and the graph display screen. This was a natural choice as it allows the user to easily access either screen. It is also conventional to use a tab navigator as seen in many popular applications, which gives us the advantage that most users are familiar with it.

We discovered the [react-native-material-ui](https://github.com/xotahal/react-native-material-ui) library, which implements several material-themed UI components, and tried implementing its BottomNavigation component. However, due to limited documentation it proved difficult to implement the actual navigating functionality so the component was scrapped. 

Upon further investigation we found the createMaterialBottomTab component which is part of the [react-navigation-material-bottom-tabs](https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html) library. This component was used because the library was well documented and the component appeared to have an intuitive implementation. We used custom icons from expo for the tabs, which is further detailed here. A simple tutorial on usage of the navigator component can be found [here](../tutorials/bottomNavigator.md).

### Styled Components
We used the `styled` component from the `styled-components` library because it provides an easy-to-use, CSS-like way of styling your react components. Our opinion as that it also makes the code more structured. 

#### Styled Components and Jest 
To be able to run yarn test with styled components, we had to add the following to the package.json under “jest” : 
```javascript
"moduleNameMapper": {
      "styled-components": "<rootDir>/node_modules/styled-components/dist/styled-components.native.cjs.js"
    },
```

## Platform Independency
Tested on both iOS and Android devices. The components were styled to align properly on all tested devices without clipping or overlapping elements. Data was successfully stored with AsyncStorage on all devices when closing and reopening the application. Since we didn’t have an iOS device to test our app on we had to use an iPhone emulator on a mac to emular the user experience for iOS users. We also tested our app with multiple screen sizes. For iOS we tested our app on everything from the small iPhone 5s to the large iPhone Xs max and for android we tested our app on all our different android devices including some emulators for smaller screen sizes.

## Unit testing
Unit testing is an important aspect of every all larger code project. Unit tests make sure that the core functionality of different units work according to spec. This can be very valuable when you make changes to your codebase so that you can test if the different units still work as they are supposed to.

Since we had trouble setting up enzyme with Jest we were more limited in what kind of functionality we could test. Therefore most of the unit tests check basic functionality. Another issue with testing the different components was the asynchronous nature of some of the methods. This caused issues with jest i.e. when we were trying to make a unit test for the AsyncStorage it seemed to set and get values from different instances of the store. Even using jest’s async features, once we set a value in the store, it was impossible to retrieve it again even though the store worked fine on the app.

One of the components we chose not to test was the FrontDisplayWrapper. When yarn test was ran, an Unexpected Token Error would show up for “HomeIcon.propTypes”. We tried adding the prop-types to the transformIgnorePatterns under Jest in the Package.json. This fix worked well for the expo-icons, but would not work for the prop-types library. That is why we chose not to test FrontDisplayWrapper.

To get our tests to run we had to whitelist several dependencies for Jest to process them. This was done by adding the following in our package.json file:
```javascript
"transformIgnorePatterns": [
     "<rootDir>/node_modules/(?!victory|react-native-svg|react-native|expo-react-native-adapter|expo|@expo/vector-icons|prop-types)"
   ]
```
