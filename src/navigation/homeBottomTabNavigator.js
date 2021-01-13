import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from 'react-native-vector-icons';

import Home from '../screens/home';
import Search from '../screens/search';
import RecordReport from '../screens/report/record';
import Map from '../screens/map';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const HomeBottomTab = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				tabStyle: {
					backgroundColor: '#000',
				},
				activeTintColor: 'white',
				style: {
					// Remove border top on both android & ios
					borderTopWidth: 0,
					borderTopColor: 'transparent',

					elevation: 0,
					shadowOpacity: 0,
					shadowOffset: {
						height: 0,
					},
					shadowRadius: 0,
				},
			}}
		>
			<Tab.Screen
				name={'Inicio'}
				component={Home}
				options={{
					tabBarIcon: ({ color }) => <Feather name={'home'} size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name={'Buscar'}
				component={Search}
				options={{
					tabBarIcon: ({ color }) => <AntDesign name={'search1'} size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name={'Reportar'}
				component={RecordReport}
				options={{
					tabBarIcon: ({ color }) => <AntDesign name={'pluscircleo'} size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name={'Mapa'}
				component={Map}
				options={{
					tabBarIcon: ({ color }) => <Feather name={'map'} size={24} color={color} />,
				}}
			/>
			<Tab.Screen
				name={'Perfil'}
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => <AntDesign name={'user'} size={24} color={color} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeBottomTab;
