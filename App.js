import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import Navigation from './src/navigation';

const App = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
				<Navigation />
			</SafeAreaView>
		</View>
	);
};

export default App;
