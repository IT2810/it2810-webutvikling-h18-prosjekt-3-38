import React from 'react'
import { View, Animated } from 'react-native'

class ImageLoader extends React.Component {
  state = {
    opacity: new Animated.Value(0)
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }
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
