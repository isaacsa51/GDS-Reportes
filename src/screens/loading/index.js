import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
	return <View style={styles.content}></View>;
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
