import React from 'react'
import { View, Animated } from 'react-native'

// Inspiration from https://www.youtube.com/watch?v=vzPmI0GCDPM
class ImageLoader extends React.Component {
  state = {
    opacity: new Animated.Value(0)
  }

  // The useNativeDriver means that the animation happens off the JS thread
  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  // Returns the animated image. ... is the spread operator, which in turn "sends" the props from the
  // SvgLogo to ImageLoader.
  render () {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
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
          },
          this.props.style
        ]}
      />
    )
  }
}
export default class SvgLogo extends React.Component {
  render () {
    return (
      <View resizeMode='cover' >
        <ImageLoader fadeDuration={0} style={{
          alignSelf: 'center', transform: [{ scale: 0.07 }]
        }} source={require('./img/LogoMoodWalker.jpg')} resizeMode='cover' />
      </View>
    )
  }
}
