import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';

import commentsData from '../../../data/comments';

const CommentCard = ({ item, style }) => (
	<View style={styles.cardsWrapper}>
		<View style={styles.card}>
			<View style={styles.cardImgWrapper}>
				<View style={styles.imageCard}>
					<Image style={styles.cardImg} resizeMode="cover" source={item.userImg} />
				</View>
			</View>

			<View style={styles.cardInfo}>
				<View style={styles.commentInfo}>
					<Text style={styles.cardTitle}>{item.userName}</Text>

					<Text style={styles.newInfo}>{item.messageTime}</Text>
				</View>

				<Text style={styles.newDescription}>{item.messageText}</Text>
			</View>
		</View>
	</View>
);

export default function ReportComments() {
	const [commentValue, setCommentValue] = useState('');

	const renderComment = ({ item }) => {
		return <CommentCard item={item} />;
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text styles={styles.headerTitle}>Comentarios del reporte</Text>
			</View>

			<FlatList
				data={commentsData}
				renderItem={renderComment}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
			/>

			{/* TextInput form */}
			<View style={styles.commentWrapper}>
				<View>
					<TextInput
						style={styles.commentInput}
						onChangeText={(commentValue) => setCommentValue(commentValue)}
						placeholder="Ingrese su comentario..."
					/>
				</View>
				<TouchableOpacity style={styles.commentButton} underlayColor="transparent">
					<View>
						<Feather name="send" size={22} color="#000" />
					</View>
				</TouchableOpacity>
			</View>

			{/* <View style={styles.commentInput}>
				<View style={styles.commentWrapper}>
					<TextInput
						style={styles.commentForm}
						onChangeText={(commentValue) => setCommentValue(commentValue)}
						placeholder="Ingrese su comentario..."
					/>
					<TouchableOpacity style={styles.commentButton}>
						<Feather name="send" size={24} />
					</TouchableOpacity>
				</View>
			</View> */}
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
		shadowRadius: 8,
		shadowOpacity: 0.1,
		zIndex: 10,
	},
	headerTitle: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	cardsWrapper: {
		width: '95%',
		alignSelf: 'center',
	},
	card: {
		height: 80,
		marginVertical: 2,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#e5e5e5',
	},
	cardImgWrapper: {
		flex: 0,
		marginTop: 15,
	},
	cardImg: {
		height: 50,
		width: 50,
		alignSelf: 'center',
		borderRadius: 25,
	},
	cardInfo: {
		flex: 3,
		padding: 10,
	},
	commentInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardTitle: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	newInfo: {
		fontStyle: 'italic',
		color: '#666',
		fontSize: 12,
	},
	newDescription: {
		marginTop: 3,
		fontSize: 14,
	},
	commentWrapper: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderBottomWidth: 0,
		borderBottomColor: '#ebecf4',
		shadowColor: '#454d65',
		shadowOffset: { height: 5 },
		shadowRadius: 8,
		shadowOpacity: 0.1,
		zIndex: 10,
		justifyContent: 'space-between',
		paddingRight: 20,
		paddingLeft: 20,
	},
	commentInput: {
		height: 40,
		justifyContent: 'flex-end',
		padding: 12,
	},

	commentForm: {
		height: 40,
	},
	commentButton: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row-reverse',
	},
});
