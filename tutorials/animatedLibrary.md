# Animated library tutorial

### [Back to README](../README.md/)

## Dependencies
* react-native

## Usage
The animated library from React Native is used by first importing it to your application:

```javascript
import { Animated } from 'react-native'
```
The recommended workflow from the [documentation](https://facebook.github.io/react-native/docs/animated#add) is to create an `Animate.Value` and link it to the style of the component you want to animate. In our application, the animated value is stored in the state of the component, and animated using the timing function. By using the `Animated.timing()` function, the component is aminated over time. We also use the `interpolate()` function to map input ranges to output ranges. The code snippet underneath shows how the image is scaled using the interpolate function.

```javascript
style={[
  {
    opacity: this.state.opacity,
    transform: [
      {
        scale: this.state.opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0.85, 1]
        })
      }
    ]
  }
]}
```

Inspiration for the animation was found here: https://www.youtube.com/watch?v=vzPmI0GCDPM
