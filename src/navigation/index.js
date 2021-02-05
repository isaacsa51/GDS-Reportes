import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RootStackScreen from '../navigation/login';

import HomeBottomTab from '../navigation/homeBottomTabNavigator';
import Search from '../screens/search';
import RecordReport from '../screens/report/record';
import Map from '../screens/map';
import PostLocation from '../components/post/postLocation';
import Profile from '../screens/profile';
import MyReports from '../screens/profile/myReports';
import ReportComments from '../components/post/comments';
import { AuthContext } from '../components/enviroment/';

const Stack = createStackNavigator();

const RootNavigation = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [userToken, setUserToken] = React.useState(null);

	const authContext = React.useMemo(
		() => ({
			signIn: () => {
				setUserToken('1337');
				setIsLoading(false);
			},
			signOut: () => {
				setUserToken(null);
				setIsLoading(false);
			},
			signUp: () => {
				setUserTokenr('1337');
				setIsLoading(false);
			},
		}),
		[]
	);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				{userToken !== null ? (
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="Inicio" component={HomeBottomTab} />
						<Stack.Screen name="Buscar" component={Search} />
						<Stack.Screen name="Reportar" component={RecordReport} />
						<Stack.Screen name="Mapa" component={Map} />
						<Stack.Screen name="PostLocation" component={PostLocation} />
						<Stack.Screen name="Perfil" component={Profile} />
						<Stack.Screen name="MyReports" component={MyReports} />
						<Stack.Screen
							name="ReportComments"
							component={ReportComments}
							options={{
								title: 'Comentarios del reporte',
								headerTintColor: '#000',
								headerTitleStyle: {
									fontWeight: 'bold',
								},
							}}
						/>
					</Stack.Navigator>
				) : (
					<RootStackScreen />
				)}
			</NavigationContainer>
		</AuthContext.Provider>
	);
};

export default RootNavigation;
