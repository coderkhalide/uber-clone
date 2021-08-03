import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const Stack = createStackNavigator();

const MapNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="NavigateCard" component={NavigateCard} />
            <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
        </Stack.Navigator>
    );
}

export default MapNavigator;
