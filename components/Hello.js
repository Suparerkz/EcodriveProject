import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Hello extends Component {
    state = {
        myState: 'Yeen,Petch'
    }
    
    render() {
      return (
          <View>
            <Text>{this.state.myState}</Text>
            </View>
      );
    }
  }
  export default Hello;