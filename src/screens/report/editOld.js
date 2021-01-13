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
import { PanGestureHandler, ScrollView, State } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Video } from 'expo-av';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { USE_NATIVE_DRIVER } from '../../../config';
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

// Class component to test draggable component
class Container extends PureComponent {
	render() {
		const { children, title, onInit } = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>

				<DragResizeContainer style={styles.canvas} onInit={onInit}>
					{children}
				</DragResizeContainer>
			</View>
		);
	}
}

const EditReport = ({ navigation }) => {
	const [currentEvent, setCurrentEvent] = useState(null);
	const [limitation, setLimitation] = useState(defaultLimitation);
	const [selectedBlock, setSelectedBlock] = setState(null);
	const [modalVisible, setModalVisible] = useState(false);

	const { uriVideoCapturado } = this.props.route.params;

	const defaultLimitation = {
		x: 0,
		y: 0,
		w: 0,
		h: 0,
	};

	const BLOCK_0 = 0;
	const BLOCK_1 = 1;
	const ON_RESIZE_START = 0;
	const ON_RESIZE = 1;
	const ON_RESIZE_END = 2;
	const ON_DRAG_START = 3;
	const ON_DRAG = 4;
	const ON_DRAG_END = 5;

	callEventHandler = (event, message) => {
		if (currentEvent !== event) {
			setCurrentEvent(event);
		}
	};

	addSticker = () => {
		console.warn('Acción DOM a video con sticker');
	};

	renderTwoItems = () => {
		const { uriVideoCapturado } = this.props.route.params;

		return (
			<Container
				onInit={(limitation) => {
					this.setState(() => {
						setLimitation(limitation);
					});
				}}
			>
				<View style={{ flex: 1 }}>
					<Modal animationType="slide" transparent={true} visible={modalVisible}>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>Seleccione un Sticker a usar</Text>

								<FlatList
									style={styles.list}
									contentContainerStyle={styles.listContainer}
									data={stickersData}
									horizontal={false}
									numColumns={2}
									renderItem={(item) => {
										return (
											<View style={styles.card}>
												<TouchableOpacity
													onPress={() => {
														addSticker();
													}}
												>
													<Image style={styles.cardImage} source={{ uri: item.image }} />
												</TouchableOpacity>
											</View>
										);
									}}
								/>

								<TouchableHighlight
									style={{ ...styles.aceptarVideoBtn }}
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
						{/* Descartar video y regresar a la pantalla de recordVideo */}
						<TouchableOpacity
							style={{ margin: 10 }}
							// onPress={() => setArir(false)}
						>
							<Ionicons name="md-close-circle" size={50} color="#fff" />
						</TouchableOpacity>

						{/* Subir video */}
						<TouchableOpacity
							style={{ margin: 10 }}
							// onPress={() => savePicture()}
						>
							<Ionicons name="md-send" size={50} color="#fff" />
						</TouchableOpacity>

						<TouchableOpacity style={{ margin: 10 }} onPress={() => setModalVisible(true)}>
							<MaterialCommunityIcons name="sticker" size={50} color="#fff" />
						</TouchableOpacity>
					</View>
				</View>

				<DragResizeBlock
					x={0}
					y={0}
					w={80}
					h={80}
					limitation={limitation}
					isDisabled={BLOCK_0 !== selectedBlock}
					onPress={() => {
						setSelectedBlock = BLOCK_0;
						// this.setState(() => {
						// 	this.state.selectedBlock = BLOCK_0;
						// 	return this.state;
						// });
					}}
				>
					<View
						style={{
							width: '100%',
							height: '100%',
						}}
					>
						<Image
							style={{ width: '100%', height: '100%' }}
							source={{ uri: 'https://avatars1.githubusercontent.com/u/43972787?s=200&v=4' }}
						/>
					</View>
				</DragResizeBlock>

				<DragResizeBlock
					x={100}
					y={100}
					w={200}
					h={200}
					limitation={limitation}
					isDisabled={BLOCK_1 !== selectedBlock}
					onPress={() => {
						this.setState(() => {
							setSelectedBlock = BLOCK_1;
							// this.state.selectedBlock = BLOCK_1;
							// return this.state;
						});
					}}
				>
					<Image
						style={{ width: 200, height: 200 }}
						source={{
							uri:
								'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.W5bqrBZrmtg8qBZ2JR-xfwHaHa%26pid%3DApi&f=1',
						}}
					/>
				</DragResizeBlock>
			</Container>
		);
	};
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
