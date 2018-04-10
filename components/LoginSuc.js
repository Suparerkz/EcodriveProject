import React, { Component } from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';



import Login from '../containers/pages/Login.js';

import Signup from '../containers/pages/Signup.js';



 class LoginSuc extends Component {

	render() {

		return(

			<Router>

			    <Stack key="root" hideNavBar={true}>

			      <Scene key="login" component={Login} title="Login" initial={true}/>

			      <Scene key="signup" component={Signup} title="Register"/>

			    </Stack>

			 </Router>

			)

	}

}
export default LoginSuc;