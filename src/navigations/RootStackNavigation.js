import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import PlanScreen from '../screens/PlanScreen';

const Stack = createStackNavigator();

const RootStackNavigation = () => { 

    const userEmail = useSelector((state) => state.userData.userEmail);

    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Group screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                    /> 
                    <Stack.Screen
                        name="PlanScreen"
                        component={PlanScreen}
                    />                     
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackNavigation;