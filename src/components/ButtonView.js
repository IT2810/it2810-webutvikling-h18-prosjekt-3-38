import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, AsyncStorage } from 'react-native';
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
            backGround: '#247BA0',

        }
        this.onPress = this.onPress.bind(this);


    }
    //Fires before the render method!
    //   this.displayData();
    // }
    fireMultiple(e) {
        this.onPress(e)
    }
    //Needs to be called after each state-change, after onPress has been called.
    //https://medium.com/@richardzhanguw/storing-and-retrieving-objects-using-asyncstorage-in-react-native-6bb1745fdcdd
    /* saveData() {
         if (this.state.emojiSad) {
             AsyncStorage.setItem('emoji', true)
             //FIKS RESTEN AV DISSE, SLIK AT DEN SOM ER TRUE BLIR LAGRET. DERETTER BLIR DEN SATT I DISPLAY DATA!
 
         }
         let states = [this.state.emojiSad, this.state.emojiNeutral, this.state.emojiHappy]
     }*/
    //Need to fire this method when the application opens!!!!
    /*
     displayData = async () => {
         console.log("DISPLAY STATE")
         try {
             let user = await AsyncStorage.getItem('states');
             alert(user);
 
         }
         catch (error) {
             alert(error);
 
         }
     }
     */

    onPress = (e) => {
        switch (e) {
            case 'emojiHappy':
                if (!this.state.emojiHappy) { //hvis den er false-> Sett den til true og sett alle
                    // andre til false!
                    this.setState({ emojiHappy: true },
                        () => {
                            this.setState({ emojiNeutral: false },
                                () => { this.setState({ emojiSad: false }) })
                        })
                }
                if (this.state.emojiHappy) {
                    this.setState({ emojiHappy: false })
                }
                break;
            case 'emojiNeutral':
                if (!this.state.emojiNeutral) { //hvis den er false-> Sett den til true og sett alle
                    // andre til false!
                    this.setState({ emojiNeutral: true },
                        () => {
                            this.setState({ emojiHappy: false },
                                () => { this.setState({ emojiSad: false }) })
                        })
                }
                if (this.state.emojiNeutral) {
                    this.setState({ emojiNeutral: false })
                }
                break;
            case 'emojiSad':
                if (!this.state.emojiSad) { //hvis den er false-> Sett den til true og sett alle
                    // andre til false!
                    this.setState({ emojiSad: true },
                        () => {
                            this.setState({ emojiHappy: false },
                                () => { this.setState({ emojiNeutral: false }) })
                        })
                }
                if (this.state.emojiSad) {
                    this.setState({ emojiSad: false })
                }
                break;
        }

        if (this.state.e) {
            this.setState({ e: false }, () => { console.log(this.state.pressStatus + "DETTE ER DEN TREDJE") })
        }
        else {
            this.setState({
                e: true
            }, () => { console.log(this.state.e + "ANDRE IF!") })
        }
        //The states are saved!
        //this.saveData();

    }
    //https://facebook.github.io/react-native/docs/touchablehighlight.html
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <StyledButtonBox style={{ backgroundColor: this.state.backGround }}>
                    <TouchableHighlight
                        activeOpacity={1}
                        onPress={() => this.fireMultiple('emojiSad')}>
                        <Entypo name="emoji-sad" size={70}
                            style={
                                this.state.emojiSad ? iconStyles.leftIcon : iconStyles.beforeClick
                            }  >
                        </Entypo>
                    </TouchableHighlight>
                </StyledButtonBox>
                <StyledButtonBox style={{ backgroundColor: this.state.backGround }}>
                    <TouchableHighlight
                        activeOpacity={1}
                        onPress={() => this.onPress('emojiNeutral')}>
                        <Entypo name="emoji-neutral" size={70}
                            style={
                                this.state.emojiNeutral ? iconStyles.middleIcon : iconStyles.beforeClick
                            }  >
                        </Entypo>
                    </TouchableHighlight>
                </StyledButtonBox>
                <StyledButtonBox style={{ backgroundColor: this.state.backGround }}>
                    <TouchableHighlight
                        activeOpacity={1}
                        onPress={() => this.onPress('emojiHappy')}>
                        <Entypo name="emoji-happy" size={70}
                            style={
                                this.state.emojiHappy ? iconStyles.rightIcon : iconStyles.beforeClick
                            }  >
                        </Entypo>
                    </TouchableHighlight>

                </StyledButtonBox >
            </View >
        );
    }
}

const iconStyles = StyleSheet.create({
    beforeClick: {
        color: '#000000',
        backgroundColor: '#247BA0',
    },
    afterClick: {
        color: '#F0F3BD',
        backgroundColor: '#247BA0',
    },
    leftIcon: {
        backgroundColor: '#247BA0',

        //powderblue
        color: '#f00',

    },
    middleIcon: {
        backgroundColor: '#247BA0',
        //powderblue
        color: '#FF9900',
        //#fa8925
        //white: #F0F3BD
        //#FA7921 ORANGE
    },
    rightIcon: {
        backgroundColor: '#247BA0',
        //powderblue
        color: '#00FF66',
    },

})