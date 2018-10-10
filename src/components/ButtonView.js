import React from 'react'
import { StyleSheet, View, TouchableHighlight, AsyncStorage } from 'react-native'

import styled from 'styled-components'
import { Entypo } from '@expo/vector-icons'

// Styled CSS from styled components
const StyledButtonBox = styled.View`
  flex: 1; 
  align-items: center;
  flex-direction:row;
  justify-content:center;
  align-Items: center;
`
// The class containing the states for each emoji icon.
// If an icon is true, coloured styling will be applied to it, so that it is renderen with color.
export default class ButtonView extends React.Component {
  constructor (props) {
    super(props)
    this.fetchData()
    this.state = {
      emojiSad: false,
      emojiNeutral: false,
      emojiHappy: false,
      backGround: '#247BA0',
      dateToday: ''
    }
    this.onPress = this.onPress.bind(this)
  }
  // Function is fired when an icon is pressed. e is for example "emojiHappy.
  fireMultiple (e) {
    this.onPress(e)
  }

  // Needs to be called after each state-change, after onPress has been called.
  // Needs to save the name of the emoji that is set to true, with the date as the key!
  // https://medium.com/@richardzhanguw/storing-and-retrieving-objects-using-asyncstorage-in-react-native-6bb1745fdcdd
  saveData () {
    // gets todays date
    var today = new Date()
    let dateKey = today.getDate() + '/' + parseInt(today.getMonth() + 1) + '/' + today.getFullYear()
    // if (!dateKey !== this.state.dateToday) {

    // day in state is updated with the correct date, as well as the corresponding emoji!
    this.setState({ dateToday: dateKey }, () => {
      if (this.state.emojiSad) {
        AsyncStorage.setItem(this.state.dateToday, 'emojiSad')
      } else if (this.state.emojiNeutral) {
        AsyncStorage.setItem(dateKey, 'emojiNeutral')
      } else if (this.state.emojiHappy) {
        AsyncStorage.setItem(dateKey, 'emojiHappy')
      } else {
        AsyncStorage.setItem(dateKey, '')
      }
    })
  }
  // This method is fired in the constructor upon opening the app.
  fetchData = async () => {
    var today = new Date()
    let todayKey = today.getDate() + '/' + parseInt(today.getMonth() + 1) + '/' + today.getFullYear()
    try {
      let dateAndEmoji = await AsyncStorage.getItem(todayKey)

      // matches this string to the emoji and sets the state.
      this.matchEmojiToString(dateAndEmoji)
    } catch (error) {
    }
  }
  // This function matches the pressed icon and updates the state accordingly.
  matchEmojiToString (e) {
    switch (e) {
      case 'emojiHappy':
        if (!this.state.emojiHappy) { // hvis den er false-> Sett den til true og sett alle
          // andre til false!
          this.setState({ emojiHappy: true },
            () => {
              this.setState({ emojiNeutral: false },
                () => {
                  this.setState({ emojiSad: false })
                  this.saveData()
                })
            })
        } else if (this.state.emojiHappy) {
          this.setState({ emojiHappy: false }, () => {
            this.saveData()
          })
        }
        break
      case 'emojiNeutral':
        if (!this.state.emojiNeutral) { // hvis den er false-> Sett den til true og sett alle
          // andre til false!
          this.setState({ emojiNeutral: true },
            () => {
              this.setState({ emojiHappy: false },
                () => {
                  this.setState({ emojiSad: false })
                  this.saveData()
                }
              )
            })
        } else if (this.state.emojiNeutral) {
          this.setState({ emojiNeutral: false }, () => {
            this.saveData()
          })
        }
        break
      case 'emojiSad':
        if (!this.state.emojiSad) { // hvis den er false-> Sett den til true og sett alle
          // andre til false!
          this.setState({ emojiSad: true },
            () => {
              this.setState({ emojiHappy: false },
                () => {
                  this.setState({ emojiNeutral: false })
                  this.saveData()
                })
            })
        } else if (this.state.emojiSad) {
          this.setState({ emojiSad: false }, () => {
            this.saveData()
          })
        }
        break
    }
  }
  // Calls the matching function which updates the state.
  onPress = (e) => {
    this.matchEmojiToString(e)

    // The states are saved!
  }
  // https://facebook.github.io/react-native/docs/touchablehighlight.html
  render () {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <StyledButtonBox style={{ backgroundColor: this.state.backGround }}>
          <TouchableHighlight
            activeOpacity={1}
            onPress={() => this.fireMultiple('emojiSad')}>
            <Entypo name="emoji-sad" size={70}
              style={
                this.state.emojiSad ? iconStyles.leftIcon : iconStyles.beforeClick
              } >
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
              } >
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
              } >
            </Entypo>
          </TouchableHighlight>

        </StyledButtonBox >
      </View >
    )
  }
}

const iconStyles = StyleSheet.create({
  beforeClick: {
    color: '#000000',
    backgroundColor: '#247BA0'
  },
  afterClick: {
    color: '#F0F3BD',
    backgroundColor: '#247BA0'
  },
  leftIcon: {
    backgroundColor: '#247BA0',

    // powderblue
    color: '#f00'

  },
  middleIcon: {
    backgroundColor: '#247BA0',
    // powderblue
    color: '#FF9900'
    // #fa8925
    // white: #F0F3BD
    // #FA7921 ORANGE
  },
  rightIcon: {
    backgroundColor: '#247BA0',
    // powderblue
    color: '#00FF66'
  }

})
