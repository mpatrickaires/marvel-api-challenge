import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharactersList from './screens/CharactersList';
import CharacterDetails from './screens/CharacterDetails';
import CharacterEdit from './screens/CharacterEdit';

import { Provider } from 'react-redux';
import store from './store';
import { getCharacters } from './store/actions/characters';

const Stack = createStackNavigator();

const App = props => {
    useEffect(() => {
        store.dispatch(getCharacters());
    }, []);

    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default App;
