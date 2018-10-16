# AsyncStorage
### [Back to README](https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-3-38/new/issue/34/readme/)

AsyncStorage is an asynchronous and persistent storage system that is global to the app. It works the same way as local storage for web. It can be used to for example save login information, so that the user won’t have to write it in every time.
The key methods we used for AsyncStorage were `AsyncStorage.setItem(myKey, “SaveThisString”)` and `AsyncStorage.getItem(myKey)`.

## Dependencies 
* react-native

## Install
* No additional installs required if you already have React Native installed.

## How to get started
To be able to use AsyncStorage, import the library from “react-native” using the following line:

```javascript
import { AsyncStorage } from "react-native"
```
The following code block is an example on how you can save data using the date as the key, with the `setItem()` function.

```javascript
saveData() {
  // gets today’s date
  var today = new Date()
  let dateKey = today.getDate() + '/' + parseInt(today.getMonth() + 1) + '/' + today.getFullYear()
  AsyncStorage.setItem(this.state.dateToday, 'TheDataYouWantSaved')
}
```

Fetching data can be done like so: 

```javascript
// This method is fired in the constructor upon opening the app.
fetchData = async () => {
  var today = new Date()
  let todayKey = today.getDate() + '/' + parseInt(today.getMonth() + 1) + '/' + today.getFullYear()
  try {
    let fetchedData = await AsyncStorage.getItem(todayKey)
    //Do something with the fetchedData
  } catch (error) {
  }
 }
```

