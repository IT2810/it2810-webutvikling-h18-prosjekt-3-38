import React, {Component} from "react";
import BottomNavigation from "react-native-material-ui/src/BottomNavigation/BottomNavigation.react";
import {Entypo} from '@expo/vector-icons/';

// Implements Material-UI's bottom navigation component
class BottomNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
          active: 'home',
          backgroundColor: '#fa5457'
        };
    }
    render() {
        return (
            <BottomNavigation style={{ container: {backgroundColor: this.state.backgroundColor} }} active={this.state.active}>
                <BottomNavigation.Action
                    key="home"
                    icon="home"
                    label="Home"
                    onPress={() => this.setState({ active: 'home', backgroundColor: '#fa5457' })}
                />
                <BottomNavigation.Action
                    key="graph"
                    icon={<Entypo name="line-graph" size={25}/>}
                    label="Graph"
                    onPress={() => this.setState({ active: 'graph', backgroundColor: '#01b4bc' })}
                />
            </BottomNavigation>
        );
    }
}

export default BottomNav