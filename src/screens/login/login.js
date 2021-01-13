import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Platform,
	StyleSheet,
	ScrollView,
	Button,
	TextInput,
	Dimensions,
} from 'react-native';
import { AntDesign, FontAwesome } from 'react-native-vector-icons';

import { AuthContext } from '../utils';

export function SignInScreen({ navigation }) {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const { signIn } = React.useContext(AuthContext);
	const { login, googleLogin, fbLogin } = useContext(AuthContext);

	return (
		// <View>
		// 	<TextInput placeholder='Username' value={username} onChangeText={setUsername} />
		// 	<TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
		// 	<Button title='Sign in' onPress={() => signIn({ username, password })} />
		// </View>

		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.text}>Bienvenido</Text>

			{/* Email form */}
			<View style={styles.inputContainer}>
				<View style={styles.iconStyle}>
					<AntDesign name="mail" size={25} color="#666" />
				</View>
				<TextInput
					value={email}
					onChangeText={setEmail}
					style={styles.input}
					numberOfLines={1}
					placeholder="Email"
					placeholderTextColor="#666"
				/>
			</View>

			{/* Password form */}
			<View style={styles.inputContainer}>
				<View style={styles.iconStyle}>
					<AntDesign name="lock1" size={25} color="#666" />
				</View>
				<TextInput
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					style={styles.input}
					numberOfLines={1}
					placeholder="Constraseña"
					placeholderTextColor="#666"
				/>
			</View>

			{/* Login button */}
			<TouchableOpacity style={styles.buttonContainer} onPress={() => signIn({ email, password })}>
				<Text style={styles.buttonText}>Entrar</Text>
			</TouchableOpacity>

			{/* Forgot password button */}
			<TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
				<Text style={styles.navButtonText}>Olvidaste tu contraseña?</Text>
			</TouchableOpacity>

			{/* Social logins */}
			<View>
				{/* Facebook */}
				<TouchableOpacity style={[styles.buttonContainerSocial, { backgroundColor: '#e6eaf4' }]}>
					<View style={styles.iconWrapper}>
						<FontAwesome name="facebook" style={styles.icon} size={22} color="#4867aa" />
					</View>
					<View style={styles.btnTxtWrapper}>
						<Text style={[styles.buttonText, { color: '#4867aa' }]}>Iniciar sesión con Facebook</Text>
					</View>
				</TouchableOpacity>

				{/* Google */}
				<TouchableOpacity style={[styles.buttonContainerSocial, { backgroundColor: '#f5e7ea' }]}>
					<View style={styles.iconWrapper}>
						<FontAwesome name="google" style={styles.icon} size={22} color="#de4d41" />
					</View>
					<View style={styles.btnTxtWrapper}>
						<Text style={[styles.buttonText, { color: '#de4d41' }]}>Iniciar sesión con Facebook</Text>
					</View>
				</TouchableOpacity>
			</View>

			{/* Password forgotten */}
			<TouchableOpacity style={styles.forgotButton}>
				<Text style={styles.navButtonText}>No tienes una cuenta? Registrate!</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		paddingTop: 50,
	},
	logo: {
		height: 150,
		width: 150,
		resizeMode: 'cover',
	},
	text: {
		fontSize: 28,
		marginBottom: 10,
		color: '#112d4d',
	},
	navButton: {
		marginTop: 15,
	},
	forgotButton: {
		marginVertical: 35,
	},
	navButtonText: {
		fontSize: 18,
		fontWeight: '500',
		color: '#2c76cc',
	},
	inputContainer: {
		marginTop: 5,
		marginBottom: 10,
		width: '100%',
		height: 800 / 15,
		borderColor: '#ccc',
		borderRadius: 3,
		borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	iconStyle: {
		padding: 10,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRightColor: '#ccc',
		borderRightWidth: 1,
		width: 50,
	},
	input: {
		padding: 10,
		flex: 1,
		fontSize: 16,
		color: '#333',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputField: {
		padding: 10,
		marginTop: 5,
		marginBottom: 10,
		width: 800 / 1.5,
		height: 800 / 1.5,
		fontSize: 16,
		borderRadius: 8,
		borderWidth: 1,
	},
	buttonContainer: {
		marginTop: 10,
		width: '100%',
		height: 800 / 15,
		backgroundColor: '#2c76cc',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#ffffff',
	},
	buttonContainerSocial: {
		marginTop: 10,
		width: '100%',
		height: 800 / 15,
		padding: 10,
		flexDirection: 'row',
		borderRadius: 3,
	},
	iconWrapper: {
		width: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		fontWeight: 'bold',
	},
	btnTxtWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
