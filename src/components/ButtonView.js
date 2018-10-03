import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
                    <Entypo name="emoji-happy" size={70} />
                </StyledButtonBox>
            </View>
        );
    }
}