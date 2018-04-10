import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

 class Logo extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:70, height: 100}}
          			source={require('../components/images/logo1.png')}/>
          		<Text style={styles.logoText}>Welcome to Ecodrive.</Text>	
  			</View>
			)
	}
}
export default Logo;

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});