
# Custom Fonts tutorial
### [Back to README](https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-3-38/edit/issue/34/readme/README.md/)

## Dependencies:
```javascript
import { Font } from 'expo'
```

## Install:

To be able to use custom fonts, we chose to use the documentation on expo. To do this, you first need to download your desired font. Place the .ttf-file in project/assets/fonts. 

## How to get started

In the component where you want to use the custom font, import the dependency line above and add a asynchronous function. 
```javascript
 async componentDidMount () {
   await Font.loadAsync({
     'Roboto-Medium': require('../../assets/fonts/Roboto-Bold.ttf')
   }).then(() => {
     this.setState({ fontLoaded: true })
   })
 }
```

We also need to add a corresponding state, and initialize it to ‘false’.

```javascript
export default class YourComponent extends React.Component {
 constructor (props) {
   super(props)
   this.state = {
     fontLoaded: false
   }
 }
```
Now, we apply logic in the render() function and add the font to the desired text-component. If the font is not loaded, another text will be displayed. The “componentDidMount”-function is called once the component is initialized, loading the font.
Here is the logic in the render() function:

```javascript
  <View>
     {this.state.fontLoaded == true ? (
       <Text style={{
         backgroundColor: '#247BA0',
         fontFamily: 'Roboto-Medium',
         color: 'white',
         bottom: 20,
         fontSize: 25
       }}>YOUR TEXT WITH THE LOADED FONT</Text>)
       : <Text>Font is not loaded yet...</Text>}
   </View>
```
