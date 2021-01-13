import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

import postsData from '../../../data/posts';
import Post from '../../components/post';

export default function MyReports() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text styles={styles.headerTitle}>Mis reportes</Text>
			</View>

			<FlatList
				data={postsData}
				renderItem={({ item }) => <Post post={item} />}
				showsVerticalScrollIndicator={false}
				snapToInterval={Dimensions.get('window').height - 69}
				snapToAlignment={'start'}
				decelerationRate={'fast'}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f9f9f9',
	},
	header: {
		paddingTop: 18,
		paddingBottom: 16,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 0,
		borderBottomColor: '#ebecf4',
		shadowColor: '#454d65',
		shadowOffset: { height: 5 },
		shadowRadius: 15,
		shadowOpacity: 0.2,
		zIndex: 10,
	},
	headerTitle: {
		fontSize: 22,
		fontWeight: 'bold',
	},
});
