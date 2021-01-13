import React, { useState } from 'react';
import { Text, View, AsyncStorage, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Register = ({ navigation }) => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRep, setPasswordRep] = useState('');
	const [loading, setLoading] = useState(false);

	const registerUser = () => {
		if (userName !== '') {
			setLoading(true);
			const getAp = async () => {
				console.log(userName);

				let formData = new FormData();
				formData.append('email', email);
				formData.append('username', userName);
				//formData.append('password', password);
				//formData.append('re_password', passwordRep)

				//console.log(formData)

				try {
					let res = await axios.post(enviroment.apiUrlApp + 'users/', formData);
					//averiguar como saber si todo salio bien para cerrar la ventana

					console.log(res.data);
					alert(res.data);
					setLoading(false);
					navigation.navigate('Login');
				} catch (err) {
					setLoading(false);
					alert(err);
				}
			};
			getAp();
		} else {
			alert('faltan datos');
		}
	};

	if (loading) {
		return <ActivityIndicator style={{ flex: 1, backgroundColor: 'black' }} size="large" color="#EF3340" />;
	} else {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'black',
				}}
			>
				<Text
					style={{
						color: 'white',
						paddingRight: 20,
						paddingLeft: 20,
						alignSelf: 'stretch',
						fontSize: 20,
					}}
				>
					Ingresa tus datos y te enviaremos las instucciones para acceder a tu cuenta
				</Text>
				<View
					style={{
						flex: 0.9,
						justifyContent: 'center',

						backgroundColor: 'black',
					}}
				>
					<View
						style={{
							backgroundColor: 'white',
							flexDirection: 'row',

							borderBottomColor: '#f2f2f2',
							borderBottomWidth: 1,
							borderRadius: 10,
							margin: 10,
							padding: 8,
						}}
					>
						<TextInput
							style={{ flex: 1 }}
							maxLength={50}
							placeholder="nombre"
							placeholderTextColor="gray"
							autoCapitalize="none"
							onChangeText={(text) => {
								setUserName(text);
							}}
						/>
					</View>

					<View
						style={{
							backgroundColor: 'white',
							flexDirection: 'row',
							width: '80%',
							borderBottomColor: '#f2f2f2',
							borderBottomWidth: 1,
							borderRadius: 10,
							margin: 10,
							padding: 8,
						}}
					>
						<TextInput
							style={{ flex: 1 }}
							maxLength={50}
							placeholder="e-mail"
							placeholderTextColor="gray"
							autoCapitalize="none"
							onChangeText={(text) => {
								setEmail(text);
							}}
						/>
					</View>

					<TouchableOpacity
						style={{
							marginRight: 5,
							backgroundColor: 'red',
							margin: 5,
							padding: 13,
							alignItems: 'center',
						}}
						onPress={() => registerUser()}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start',
							}}
						>
							<Text
								style={{
									marginRight: 10,
									fontSize: 18,
									color: 'white',
								}}
							>
								{'Registrate'}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
};

//export default LoginOptions;

const MainStack = createStackNavigator();

function MainStackScreen() {
	return (
		<MainStack.Navigator>
			<MainStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
			<MainStack.Screen name="Register" component={Register} />
		</MainStack.Navigator>
	);
}

export default Register;
