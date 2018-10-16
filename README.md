# Web development project 3 (IT2810)
This is the repository for our third project in web development. This project was centered around creating a mobile application using
react-native and the expo API. The app was to be independent of mobile platforms and include some form of user interaction/input
implemented with at least one of the expo APIs.

## Installation instructions
If you want to download and build this project yourself follow these instructions (assumes basic knowledge of git and npm/yarn).
You will need to have [node](https://nodejs.org/en/download/) installed on your computer to run this app.

First clone the github repo to your local computer and `cd` into the root folder. Install all the dependencies using either npm or yarn.
You will also need to install `expo-cli` globally so that you can use the cli to run the application. If you want to be able to run the
tests you will also need to install `jest` globally. To start running the expo server run `npm start` or `yarn start` and to run the tests
run `npm test` or `yarn test`.

## Victory
Victory is a library featuring interactive components used to visualize data like pie charts, graphs etc. in react apps. Their work-in-progress library victory-native adds functionality to React Native apps. We use the components VictoryChart and VictoryLine to visualize the user’s weekly progress on steps taken. Remember that expo already includes a version of react-native-svg, therefore this doesn’t need to be installed separately. A brief tutorial can be found [here](https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-3-38/edit/issue/34/readme/tutorials/victoryTutorial.md/).

## AsyncStorage
AsyncStorage is an asynchronous and persistent storage system that is global to the app. It works the same way as local storage for web. It can be used to for example save login information, so that the user won’t have to write it in every time.
The key methods we used for AsyncStorage were AsyncStorage.setItem(myKey, “SaveThisString”) and AsyncStorage.getItem(myKey). A brief tutorial on AsyncStorage can be found [here](https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-3-38/edit/issue/34/readme/tutorials/asyncstorageTutorial.md/).
