import React from 'react';
import BottomNav from './BottomNav'
import {Text, View} from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 1,
                    height: 2000,
                    width: 400,
                    backgroundColor: 'blue',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 30}}>heihei</Text>
                </View>
                <BottomNav/>
            </View>
        );
    }
}