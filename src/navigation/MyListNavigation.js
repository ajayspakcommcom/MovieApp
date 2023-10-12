import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
import HomeScreen from '../screens/MyList/HomeScreen';
import DetailScreen from '../screens/MyList/DetailScreen';


const Stack = createNativeStackNavigator();

const MyListNavigation = () => {

    const screenOptions = {
        headerShown: false,
        headerStyle: { backgroundColor: Colors.chineseBlack },
        headerTintColor: 'white',
        headerTitleAlign: 'left',
        contentStyle: { backgroundColor: Colors.chineseBlack }
    };

    return (
        <Stack.Navigator screenOptions={{ ...screenOptions, }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: true, presentation: 'containedTransparentModal' }} />
        </Stack.Navigator>
    )
}

export default MyListNavigation;
