import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../styles/Colors';
import HomeScreen from '../screens/Profile/HomeScreen';
import IndexScreen from '../screens/Dummy/IndexScreen';


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
            {/* <Stack.Screen name="IndexScreen" component={IndexScreen} /> */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />

        </Stack.Navigator>
    )
}

export default ProfileNavigation;





