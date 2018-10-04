import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import styled from 'styled-components'
import { Ionicons, Entypo } from '@expo/vector-icons';


const StyledButtonBox = styled.View`
  flex: 1; 
  align-items: center;
  flex-direction:row;
  justify-content:center;
  align-Items: center;
`

export default class ButtonView extends React.Component {

    handleOnclick = () => {
        this.setState({ emojiBol: true },
            () => {
                console.log(this.state.emojiBol)
            });

    }
    changeButtonStyle() {
        console.log(this.state.emojiBol)
        return "blue"
    }
    clickedButton() {
        console.log("pressed");
        console.log(this.state.emojiBol)
        if (this.state.emojiBol == true) {
            this.setState({ emojiBol: false })
        }
        else {
            this.setState({ emojiBol: true })
        }
    }
    _onHideUnderlay() {
        this.setState({ pressStatus: false });
    }
    _onShowUnderlay() {
        console.log("PRESSED")
        this.setState({ pressStatus: true });
    }

    constructor(props) {
        super(props)
        this.state = {
            emojiSad: false,
            emojiNeutral: false,
            emojiHappy: false,
            emojiBol: false,
            pressStatus: false,
        }
    }
    onPress1 = () => {
        console.log(this.state.pressStatus + "Dette er den første konsollen!")
        if (this.state.pressStatus) {
            this.setState({ pressStatus: false }, () => { console.log(this.state.pressStatus + "DETTE ER DEN ANDRE") })
        }
        else {
            this.setState({
                pressStatus: true
            }, () => { console.log(this.state.pressStatus) })
        }
    }
    //https://facebook.github.io/react-native/docs/touchablehighlight.html
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <StyledButtonBox style={{ backgroundColor: 'powderblue' }}>
                    <Entypo name="emoji-sad" size={70} />
                </StyledButtonBox>
                <StyledButtonBox style={{ backgroundColor: 'skyblue' }}>
                    <Entypo name="emoji-neutral" size={70} />
                </StyledButtonBox>
                <StyledButtonBox style={{ backgroundColor: 'steelblue' }}>


                    <TouchableHighlight
                        onPress={() => { this.onPress1 }}
                        activeOpasity={0.5}
                        style={
                            this.state.pressStatus ? iconStyles.afterClick : iconStyles.beforeClick}
                        onHideUnderlay={this._onHideUnderlay.bind(this)}
                        onShowUnderlay={this._onShowUnderlay.bind(this)}

                    >
                        <Entypo name="emoji-happy" size={70}

                        >
                        </Entypo>
                    </TouchableHighlight>

                </StyledButtonBox >
            </View >
        );
    }
}

const iconStyles = StyleSheet.create({
    beforeClick: {
        color: '#000000'

    },
    afterClick: {
        color: '#F0F3BD'
    }
})