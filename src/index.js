import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import CharactersList from './screens/CharactersList';
import CharacterDetails from './screens/CharacterDetails';
import CharacterEdit from './screens/CharacterEdit';

import { store, persistor } from './store';

const Stack = createStackNavigator();

if (__DEV__) {
	import('./config/ReactotronConfig').then(() =>
		console.tron.log('Reactotron Configured!'),
	);
}

const App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<NavigationContainer>
				<SafeAreaView style={{ flex: 1 }}>
					<Stack.Navigator initialRouteName="CharactersList">
						<Stack.Screen
							name="CharactersList"
							component={CharactersList}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="CharacterDetails"
							component={CharacterDetails}
						/>
						<Stack.Screen
							name="CharacterEdit"
							component={CharacterEdit}
						/>
					</Stack.Navigator>
				</SafeAreaView>
			</NavigationContainer>
		</PersistGate>
	</Provider>
);
export default App;
