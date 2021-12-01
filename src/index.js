import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharactersList from './screens/CharactersList';
import CharacterDetails from './screens/CharacterDetails';

const Stack = createStackNavigator();

const App = props => {
    return (
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
                        options={({ route }) => ({
                            title: route.params.character.name,
                        })}
                    />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
