import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function LoginOptions({ navigation }) {
	return (
		<View style={styles.content}>
			<Text>Opciones de login con FB, Google y demás...</Text>

			<Button title="Registrarme" onPress={navigation.navigate('LoginScreen')} />
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
