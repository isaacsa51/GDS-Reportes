import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../../components/enviroment';

export default function Profile() {
	const { signIn } = React.useContext(AuthContext);

	return (
		<View style={styles.content}>
			<Text>REGISTRO</Text>

			<TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />

			<Button title="Registrarme" onPress={() => signIn()} />
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
