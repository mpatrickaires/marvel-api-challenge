import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeroesList from './screens/HeroesList';
import HeroDetails from './screens/HeroDetails';

const Stack = createStackNavigator();

const App = props => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator initialRouteName="HeroesList">
                    <Stack.Screen
                        name="HeroesList"
                        component={HeroesList}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="HeroDetails" component={HeroDetails} />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
