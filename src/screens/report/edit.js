import React, { Component, useState, setState, PureComponent } from 'react';
import {
	Animated,
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	Modal,
	FlatList,
	Alert,
	Platform,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Video } from 'expo-av';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
	DragResizeBlock,
	DragResizeContainer,
	AXIS_X,
	AXIS_Y,
	AXIS_ALL,
	CONNECTOR_TOP_LEFT,
	CONNECTOR_TOP_MIDDLE,
	CONNECTOR_TOP_RIGHT,
	CONNECTOR_MIDDLE_RIGHT,
	CONNECTOR_BOTTOM_RIGHT,
	CONNECTOR_BOTTOM_MIDDLE,
	CONNECTOR_BOTTOM_LEFT,
	CONNECTOR_MIDDLE_LEFT,
	CONNECTOR_CENTER,
} from 'react-native-drag-resize';

import stickersData from '../../../data/stickers';

//Container of the stickers
const Container = () => {
	const [children, setChildren] = useState(false);
	const [title, setTitle] = useState(false);
	const [onInit, setOnInit] = useState(false);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>

			<DragResizeContainer style={styles.canvas} onInit={setOnInit}>
				{setChildren}
			</DragResizeContainer>
		</View>
	);
};

const EditReport = ({ route, navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const { uriVideoCapturado } = route.params;

	addSticker = () => {
		console.warn('Acción DOM para poner sticker');
	};

	sendVideo = () => {
		console.warn('enviar video a endpoint');
	};

	return (
		<View style={{ flex: 1 }}>
			<Modal animationType="slide" transparent={true} visible={!modalVisible}>
				<View style={styles.centeredView}>
					<View style={styles.modalText}>
						<Text style={styles.modalText}>Seleccione un Sticker</Text>

						<FlatList
							style={styles.list}
							contentContainerStyle={styles.listContainer}
							data={stickersData}
							horizontal={false}
							numColumns={2}
							renderItem={() => {
								return (
									<View style={styles.card}>
										<TouchableOpacity
											onPress={() => {
												addSticker();
											}}
										>
											<Image style={styles.cardImage} source={{ uri: stickersData.image }} />
										</TouchableOpacity>
									</View>
								);
							}}
						/>

						<TouchableHighlight
							style={styles.aceptarVideoBtn}
							onPress={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<Text>Aceptar</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>

			<Video
				source={{ uri: uriVideoCapturado }}
				rate={1.0}
				volume={1.0}
				isMuted={false}
				resizeMode="cover"
				shouldPlay={true}
				isLooping
				useNativeControls={false}
				style={{ width: '100%', height: '100%', flex: 1 }}
			/>

			<View style={styles.accionesBotones}>
				{/* Cancel video */}
				<TouchableOpacity
					style={{ margin: 10 }}
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Ionicons name="md-close-circle" size={50} color="#fff" />
				</TouchableOpacity>
				{/* View available stickers */}
				<TouchableOpacity
					style={{ margin: 10 }}
					onPress={() => {
						setModalVisible(!modalVisible);
					}}
				>
					<MaterialCommunityIcons name="sticker" size={50} color="#fff" />
				</TouchableOpacity>

				{/* Upload video */}
				<TouchableOpacity
					style={{ margin: 10 }}
					onPress={() => {
						sendVideo();
					}}
				>
					<Ionicons name="md-send" size={50} color="#fff" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
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
		position: 'absolute',
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
		marginBottom: 15,
		textAlign: 'center',
		fontSize: 22,
	},
	modalBotones: {
		alignContent: 'flex-end',
	},
	aceptarVideoBtn: {
		backgroundColor: '#4CAF50',
		borderRadius: 3,
		padding: 10,
		elevation: 2,
		color: '#fff',
	},
	cancelarVideoBtn: {
		backgroundColor: 'white',
		padding: 10,
	},
	box: {
		width: 250,
		height: 150,
		alignSelf: 'center',
		margin: 10,
		zIndex: 200,
	},
	container: {
		flex: 1,
		marginTop: 20,
	},
	list: {
		paddingHorizontal: 5,
	},
	listContainer: {
		alignItems: 'center',
	},
	card: {
		marginVertical: 8,
		flexBasis: '50%',
		marginHorizontal: 5,
	},
	cardImage: {
		flex: 1,
		height: 150,
		width: null,
	},
	canvas: {
		width: '100%',
		height: '100%',
		backgroundColor: '#D1D5DA',
		marginTop: 4,
	},
	MainContainer: {
		flex: 1,
		backgroundColor: '#eee',
		justifyContent: 'center',
		paddingTop: Platform.OS == 'ios' ? 20 : 0,
	},

	Animated_View_Style: {
		height: 60,
		backgroundColor: '#FF9800',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
	},

	View_Inside_Text: {
		color: '#fff',
		fontSize: 24,
	},

	TouchableOpacityStyle: {
		position: 'absolute',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		right: 30,
		bottom: 30,
	},

	FloatingButtonStyle: {
		resizeMode: 'contain',
		width: 50,
		height: 50,
	},
});

export default EditReport;
