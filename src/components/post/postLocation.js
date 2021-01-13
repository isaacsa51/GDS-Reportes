import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';

import Leaflet from '../../components/map';

export default function PostLocation() {
	// const [location, setLocation] = useState({ latitude, longitude });
	// const [errorMsg, setErrorMsg] = useState(null);

	// // Get location
	// useEffect(() => {
	// 	(async () => {
	// 		let { status } = await Location.requestPermissionsAsync();
	// 		if (status !== 'granted') {
	// 			setErrorMsg('Permission to access location was denied');
	// 			return;
	// 		}

	// 		let location = await Location.getCurrentPositionAsync({});
	// 		setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
	// 	})();
	// }, []);

	// let text = 'Obteniendo ubicación...';

	// if (errorMsg) {
	// 	text = errorMsg;
	// } else if (location) {
	// 	text = JSON.stringify(location);
	// }

	// console.log(location);
	// console.log(location.coords.latitude)

	return (
		<SafeAreaView style={styles.Container}>
			{/* <WebView source={{ html: Leaflet }} style={styles.Webview} geolocationEnabled={true} /> */}

			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 23.23444,
					longitude: -102,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
	},
	Webview: {
		flex: 2,
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
