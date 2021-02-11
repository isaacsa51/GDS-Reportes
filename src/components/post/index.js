import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

import { AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons';

const Post = (props) => {
	const [post, setPost] = useState(props.post);
	const [isLiked, setIsLiked] = useState(false);
	const [paused, setPaused] = useState(false);
	const [muted, setMuted] = useState(false);

	const navigation = useNavigation();

	const handlePlayAndPause = () => {
		setPaused(!paused);
		setMuted(!muted);
	};

	const onLikePress = () => {
		const likeToAdd = isLiked ? -1 : 1;
		setPost({
			...post,
			likes: post.likes + likeToAdd,
		});
		setIsLiked(!isLiked);
	};

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={handlePlayAndPause}>
				<Video
					source={{ uri: post.videoUri }}
					style={styles.video}
					rate={1.0}
					volume={1.0}
					isMuted={!muted}
					resizeMode="cover"
					shouldPlay={!paused}
					isLooping
				/>
			</TouchableWithoutFeedback>

			<View style={styles.uiContainer}>
				<View style={styles.rightContainer}>
					{/* Side component */}
					<Image style={styles.profilePicture} source={{ uri: post.user.profilePictureUri }} />

					<TouchableOpacity style={styles.iconsContainer} onPress={() => navigation.navigate('ReportComments')}>
						<AntDesign name={'message1'} size={42} color={'white'} />
						<Text style={styles.sideStats}>{post.comments}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.iconsContainer} onPress={onLikePress}>
						<AntDesign name={isLiked ? 'heart' : 'hearto'} size={42} color={isLiked ? '#d32f2f' : 'white'} />
						<Text style={styles.sideStats}>{post.likes}</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.sideStats}
						onPress={() => {
							navigation.navigate('PostLocation');
						}}
					>
						<SimpleLineIcons name={'location-pin'} size={40} color={'#fff'} />
					</TouchableOpacity>
				</View>

				{/* Bottom Container */}
				<View style={styles.bottomContainer}>
					<Text style={styles.tituloPost}>{post.user.username}</Text>
					<Text style={styles.descPost}>{post.description}</Text>

					<View style={styles.btmCategories}>
						<Ionicons name={'md-business'} size={22} color="white" />
						<Text style={styles.categoria}>{post.categories}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: Dimensions.get('window').height - 68,
	},
	video: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	uiContainer: {
		height: '100%',
		justifyContent: 'flex-end',
	},
	bottomContainer: {
		color: 'white',
		marginLeft: 5,
		marginBottom: 5,
	},
	tituloPost: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 0,
	},
	descPost: {
		color: 'white',
		fontSize: 16,
		fontWeight: '300',
		marginBottom: 5,
	},
	btmCategories: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	categoria: {
		color: 'white',
		fontSize: 16,
		fontWeight: '300',
		marginLeft: 5,
	},

	//Side container
	rightContainer: {
		alignSelf: 'flex-end',
		height: 255,
		justifyContent: 'space-between',
		marginRight: 3,
	},
	profilePicture: {
		width: 48,
		height: 48,
		borderRadius: 50,
		borderWidth: 3,
		borderColor: 'white',
	},
	sideStats: {
		color: 'white',
		alignSelf: 'center',
		fontSize: 16,
	},
	iconsContainer: {
		alignItems: 'center',
	},
});

export default Post;
