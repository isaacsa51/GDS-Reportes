import { StatusBar } from 'expo-status-bar';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import React, { Component, useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Modal,
	Image,
	TextInput,
	TouchableHighlight,
} from 'react-native';
import { Video } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Location from 'expo-location';

import categoryData from '../../../data/categories';

const RecordReport = ({ navigation }) => {
	const camRef = useRef(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [hasPermission, setHaspermission] = useState(null);
	const [recording, setRecording] = useState(false);
	const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
	const [videoCapturado, setVideoCapturado] = useState(null);
	const [abrirModal, setAbrirModal] = useState(false);
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	// Get location
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	let text = 'Obteniendo ubicación...';
	let lat = '';
	let log = '';

	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
	}

	console.log(location);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHaspermission(status === 'granted');
		})();

		(async () => {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			// console.log(status);
			setHaspermission(status === 'granted');
		})();
		(async () => {
			const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
			setHaspermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>Acceso denegado!</Text>;
	}

	async function grabarVideo() {
		let video;

		if (!recording) {
			setRecording(true);
			const options = { quality: '360p', maxDuration: 30 };
			video = await camRef.current.recordAsync(options);
			setVideoCapturado(video.uri);
			setAbrirModal(true);
			console.log(video.uri);

			/*NavigationPreloadManager.navigate('Video reporte', {
        	videoUri: video,
        	coordenadas: 'poner latitud y longitud...'
      		});*/
		} else {
			setRecording(false);
			camRef.current.stopRecording();
		}
	}

	return (
		<View style={{ flex: 1 }}>
			<Camera style={{ flex: 1 }} type={type} ref={camRef}>
				<View
					style={{
						flex: 1,
						backgroundColor: 'transparent',
						flexDireccion: 'row',
					}}
				></View>
			</Camera>

			{/* Menu con opciónes de cámara */}
			<View
				style={{
					backgroundColor: '#000',
					flex: 0.3,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{/* Voltear camara */}
				<TouchableOpacity
					style={{
						alignSelf: 'flex-end',
						flex: 0.1,
						position: 'absolute',
					}}
					onPress={() => {
						setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
					}}
				>
					<Ionicons
						style={{ marginRight: 40, paddingBottom: 10, color: 'white' }}
						name="ios-reverse-camera"
						size={38}
						color="white"
					/>
				</TouchableOpacity>

				{/* Activar flash */}
				<TouchableOpacity
					style={{
						flex: 0.1,
						alignSelf: 'flex-start',
						alignItems: 'center',
						position: 'absolute',
					}}
					onPress={() => {
						setFlash(
							flash === Camera.Constants.FlashMode.torch
								? Camera.Constants.FlashMode.torch
								: Camera.Constants.FlashMode.off
						);
					}}
				>
					<Ionicons
						style={{ marginLeft: 40, paddingBottom: 10, color: 'white' }}
						name={flash ? 'ios-flash' : 'ios-flash-off'}
						size={34}
						color="white"
					/>
				</TouchableOpacity>

				{/* Botón para grabar */}
				<TouchableOpacity style={styles.grabar} onPress={grabarVideo}>
					<Ionicons
						style={{ marginBottom: 10, color: '#EF3340' }}
						name={recording ? 'ios-square' : 'ios-radio-button-on'}
						size={100}
					/>
				</TouchableOpacity>

				<Text style={{ color: 'white' }}>
					<Ionicons style={{ color: 'white' }} name="ios-navigate" size={18} color="white" />
					{' ' + text}
				</Text>

				<Text style={{ marginTop: 10, fontSize: 14, color: 'white' }}>Explicanos en 30 segundos que sucede...</Text>
			</View>

			{videoCapturado && (
				<Modal animationType="slide" transparent={true} visible={abrirModal}>
					<View style={{ flex: 1 }}>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>Datos necesarios del reporte</Text>

								{/* TextInputs to specify which title and categories has */}
								<View styles={styles.reportForms}>
									<TextInput
										style={styles.inputReport}
										placeholder="Titulo del reporte"
										underlineColorAndroid={'transparent'}
									/>

									<TextInput
										style={styles.inputMultipleReport}
										placeholder="Descripción del reporte"
										multiline
										numberOfLines={2}
										underlineColorAndroid={'transparent'}
									/>

									<Text>Dropdown para seleccionar categorias aquí jeje xd...</Text>
								</View>

								{/* View to organize the buttons */}
								<View style={styles.modalBotones}>
									{/* Cancel button */}
									<View style={styles.accionesBotones}>
										<TouchableHighlight
											style={{ ...styles.cancelarVideoBtn }}
											onPress={() => {
												setAbrirModal(false);
											}}
										>
											<Text style={{ color: 'black' }}>Cancelar</Text>
										</TouchableHighlight>

										<TouchableHighlight
											style={{ ...styles.aceptarVideoBtn }}
											onPress={() => {
												setAbrirModal(false);
												// Cambiar de pantalla y mandar la uri del video capturado después de aceptar
												navigation.navigate('EditReport', { uriVideoCapturado: videoCapturado });

												/*NavigationPreloadManager.navigate('Video reporte', {
        											videoUri: video,
        											coordenadas: 'poner latitud y longitud...'
      											});*/
											}}
										>
											<Text style={{ color: 'white' }}>Aceptar</Text>
										</TouchableHighlight>
									</View>
								</View>
							</View>
						</View>
					</View>
				</Modal>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	boton: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#121212',
		margin: 20,
		borderRadius: 10,
		height: 50,
	},
	grabar: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	fondoVisualizacon: {
		flex: 1,
	},
	accionesBotones: {
		flexDirection: 'row',
		alignItems: 'center',
		left: 0,
		bottom: 0,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 35,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	modalText: {
		marginBottom: 20,
		fontWeight: 'bold',
		fontSize: 22,
		textAlign: 'center',
	},
	modalBotones: {
		alignContent: 'center',
	},
	aceptarVideoBtn: {
		backgroundColor: '#006600',
		fontWeight: 'bold',
		borderRadius: 3,
		padding: 10,
	},
	cancelarVideoBtn: {
		backgroundColor: 'white',
		padding: 10,
	},
	reportForms: {
		alignSelf: 'stretch',
	},
	inputReport: {
		alignSelf: 'stretch',
		height: 40,
		marginBottom: 12,
		color: '#000',
		borderColor: '#e0e0e0',
		borderRadius: 5,
		borderWidth: 1,
	},
	inputMultipleReport: {
		alignSelf: 'stretch',
		height: 65,
		marginBottom: 12,
		color: '#000',
		borderColor: '#e0e0e0',
		borderRadius: 5,
		borderWidth: 1,
	},
});

export default RecordReport;
