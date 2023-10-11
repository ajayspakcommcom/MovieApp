import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/AuthSlice';
import HomeScreen from '../screens/Profile/HomeScreen';

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {

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
        </Stack.Navigator>
    )
}

export default ProfileNavigation;





