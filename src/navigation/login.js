import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/login/login';
import LoginOptions from '../screens/login/loginOptions';
import RegisterScreen from '../screens/register';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
	<RootStack.Navigator headerMode="none">
		<RootStack.Screen name="LoginOptions" component={LoginOptions} />
		<RootStack.Screen name="LoginScreen" component={LoginScreen} />
		<RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
	</RootStack.Navigator>
);

export default RootStackScreen;
