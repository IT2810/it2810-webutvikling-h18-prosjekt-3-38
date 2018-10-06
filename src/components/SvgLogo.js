import React from 'react'
import { View, Image } from 'react-native'

export default class SvgLogo extends React.Component {
    render() {
        return (
            <View resizeMode='cover' >
                <Image style={{
                    alignSelf: 'center', transform: [{ scale: 0.07 }]
                }} source={require('./img/LogoMoodWalker.jpg')} resizeMode='cover' />
            </View>
        )
    }
}
