import React, { setState, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Post from '../../components/post';
import postsData from '../../../data/posts';

export default function Profile() {
	const [activeIndex, setActiveIndex] = useState(0);

	tabClicked = (index) => {
		setActiveIndex(index);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleBar}>
				<Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
			</View>

			<View style={{ alignSelf: 'center' }}>
				<View style={styles.profileImage}>
					<Image
						source={{ uri: 'https://www.thepassivevoice.com/wp-content/uploads/2020/05/a1-3-640x640.jpg' }}
						style={styles.image}
						resizeMode="cover"
					></Image>
				</View>
			</View>

			<View style={styles.infoContainer}>
				<Text style={[styles.text, { fontWeight: '600', fontSize: 36 }]}>usuario</Text>
				<Text style={[styles.text, { fontWeight: '200', fontSize: 28 }]}>ciudad, estado</Text>
			</View>

			<View style={styles.statsContainer}>
				<View style={styles.statsBox}>
					<Text style={[styles.text, { fontSize: 24 }]}>483</Text>
					<Text style={[styles.text, styles.subText]}>Reportes</Text>
				</View>
				<View style={[styles.statsBox, { borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1 }]}>
					<Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
					<Text style={[styles.text, styles.subText]}>Likes</Text>
				</View>
				<View style={styles.statsBox}>
					<Text style={[styles.text, { fontSize: 24 }]}>302</Text>
					<Text style={[styles.text, styles.subText]}>Comentarios</Text>
				</View>
			</View>

			<View style={styles.buttonsContainer}>
				<Text
					active={activeIndex === 0}
					style={[activeIndex === 0 ? styles.activiyButtonsActive : styles.activityButtons]}
					onPress={() => tabClicked(0)}
				>
					Reportes Subidos
				</Text>

				<Text
					active={activeIndex === 1}
					style={[activeIndex === 1 ? styles.activiyButtonsActive : styles.activityButtons]}
					onPress={() => tabClicked(1)}
				>
					Comentarios hechos
				</Text>
			</View>

			{/* Secciones de los botones */}
			{activeIndex === 0 && (
				<ScrollView>
					<View style={styles.postContainer}>
						<View style={styles.box}>
							<FlatList
								data={postsData}
								renderItem={({ item }) => {
									<View style={styles.inner}>
										<Post post={item} />
									</View>;
								}}
								showsVerticalScrollIndicator={false}
							/>
						</View>

						<View style={styles.box}>
							<View style={styles.inner}>
								<Text>Post</Text>
							</View>
						</View>

						<View style={styles.box}>
							<View style={styles.inner}>
								<Text>Post</Text>
							</View>
						</View>

						<View style={styles.box}>
							<View style={styles.inner}>
								<Text>Post</Text>
							</View>
						</View>

						<View style={styles.box}>
							<View style={styles.inner}>
								<Text>Post</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			)}

			{activeIndex === 1 && (
				<View style={styles.postContainer}>
					<ScrollView>
						<Text>Otra sección</Text>
					</ScrollView>
				</View>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	text: {
		fontFamily: 'HelveticaNeue',
		color: '#52575D',
	},
	image: {
		flex: 1,
		height: undefined,
		width: undefined,
	},
	titleBar: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
		marginTop: 24,
		marginHorizontal: 16,
	},
	subText: {
		fontSize: 12,
		color: '#AEB5BC',
		textTransform: 'uppercase',
		fontWeight: '500',
	},
	profileImage: {
		width: 150,
		height: 150,
		borderRadius: 100,
		overflow: 'hidden',
	},
	infoContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		marginTop: 16,
	},
	statsContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginTop: 32,
	},
	statsBox: {
		alignItems: 'center',
		flex: 1,
	},

	recent: {
		marginLeft: 78,
		marginTop: 32,
		marginBottom: 6,
		fontSize: 10,
	},
	recentItem: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginBottom: 16,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 20,
	},
	activityButtons: {
		fontSize: 16,
		color: '#AEB5BC',
		textTransform: 'uppercase',
		fontWeight: '500',
	},
	activiyButtonsActive: {
		fontSize: 16,
		color: '#3b7bbf',
		textTransform: 'uppercase',
		fontWeight: '500',
	},
	postContainer: {
		width: '100%',
		height: '85%',
		padding: 5,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	box: {
		width: '50%',
		height: '50%',
		padding: 5,
	},
	inner: {
		flex: 1,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
