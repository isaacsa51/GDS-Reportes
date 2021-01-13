import React from 'react';
import { View, FlatList, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fontisto } from 'react-native-vector-icons';

import Post from '../../components/post';
import postsData from '../../../data/posts';

const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
	return (
		<View>
			{/* Video Post */}
			<FlatList
				data={postsData}
				renderItem={({ item }) => <Post post={item} />}
				showsVerticalScrollIndicator={false}
				snapToInterval={Dimensions.get('window').height - 68}
				snapToAlignment={'start'}
				decelerationRate={'fast'}
			/>

			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('MyReports');
					}}
				>
					<Text style={styles.text}>Mis Reportes</Text>
				</TouchableOpacity>

				<Fontisto style={styles.rotate} name="minus-a" color="#fff" size={24} />
				<Text style={styles.text}>General</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: width,
		height: 50,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		flexDirection: 'row',
	},
	text: {
		fontSize: 18,
		color: '#fff',
	},
	rotate: {
		transform: [{ rotate: '90deg' }],
	},
});

export default Home;
