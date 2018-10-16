# AsyncStorage tutorial
### [Back to README](../README.md)

AsyncStorage is an asynchronous and persistent storage system that is global to the app. It works the same way as local storage for web. It can be used to for example save login information, so that the user won’t have to write it in every time.
The key methods we used for AsyncStorage were `AsyncStorage.setItem(myKey, “SaveThisString”)` and `AsyncStorage.getItem(myKey)`.

## Dependencies 
* react-native

## Install
* No additional installs required if you already have React Native installed.

## Usage
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
For our application, we used AsyncStorage in two instances. The first one was for saving which mood button was pressed, so that when the user logged into the application, the selected mood button would be coloured in. This data is placed in the phone memory using the setItem()-call with today’s date as the key. This means that the selected mood button at 2359 every day would be saved to the memory with the date as the key. This would be useful if we wanted to do something more with this data in the future, for example colouring in the graph according to the pressed mood button.

The other instance where we used the AsyncStorage was when we saved the motivation goal for the graph. 
