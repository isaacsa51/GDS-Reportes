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
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.titleBar}>
					<Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
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

				<View style={{ flex: 1 }}>
					<View
						styles={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#ccc' }}
					>
						<Button
							transparent
							title="Reportes subidos"
							active={activeIndex === 0}
							style={[activeIndex === 0 ? {} : { color: Colors.gray }]}
							onPress={() => tabClicked(0)}
						></Button>

						<Button
							transparent
							title="Comentarios hechos"
							active={activeIndex === 1}
							style={[activeIndex === 1 ? {} : { color: Colors.gray }]}
							onPress={() => tabClicked(1)}
						></Button>
					</View>

					{activeIndex === 0 && (
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
					)}

					{activeIndex === 1 && (
						<View style={styles.postContainer}>
							<Text>Otra sección</Text>
						</View>
					)}
				</View>
			</ScrollView>
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
		justifyContent: 'space-between',
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
	mediaImageContainer: {
		width: 180,
		height: 200,
		borderRadius: 12,
		overflow: 'hidden',
		marginHorizontal: 10,
	},
	mediaCount: {
		backgroundColor: '#41444B',
		position: 'absolute',
		top: '50%',
		marginTop: -50,
		marginLeft: 30,
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		shadowColor: 'rgba(0, 0, 0, 0.38)',
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 20,
		shadowOpacity: 1,
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
	activityIndicator: {
		backgroundColor: '#CABFAB',
		padding: 4,
		height: 12,
		width: 12,
		borderRadius: 6,
		marginTop: 3,
		marginRight: 20,
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
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
