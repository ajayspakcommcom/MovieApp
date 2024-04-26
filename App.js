import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from "./src/styles/Colors";
import HomeNavigation from "./src/navigation/HomeNavigation";
import MyListNavigation from "./src/navigation/MyListNavigation";
import SearchNavigation from "./src/navigation/SearchNavigation";
import ProfileNavigation from "./src/navigation/ProfileNavigation";
import LoginRegisterScreen from "./src/screens/Auth/LoginRegisterScreen";
import IndexScreen from "./src/screens/Dummy/IndexScreen";
import { useSelector } from 'react-redux';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const data = useSelector((state) => state.auth);

    const handleLogin = () => {

    };

    useEffect(() => {

        const getUserData = async () => {
            const storedToken = await AsyncStorage.getItem('userToken');

            if (storedToken) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        };

        getUserData();

    }, [handleLogin]);

    const tabScreenOptions = {
        headerShown: false,
        tabBarActiveTintColor: Colors.lotion,
        tabBarInactiveTintColor: Colors.philippineGray,
        tabBarStyle: { backgroundColor: Colors.chineseBlack, paddingHorizontal: 5, height: 60, paddingBottom: 5 },
        tabBarLabelStyle: { fontSize: 13, lineHeight: 15 },
    };

    const stackScreenOptions = {
        headerShown: false,
        contentStyle: { backgroundColor: Colors.chineseBlack }
    };

    return (

        <NavigationContainer>

            {isLoggedIn &&
                <Tab.Navigator screenOptions={{ ...tabScreenOptions }}>
                    <Tab.Screen name="Home" component={HomeNavigation} options={{ tabBarIcon: ({ color, size }) => <Icon name={'home'} size={size} color={color} /> }} />
                    <Tab.Screen name="MyList" component={MyListNavigation} options={{ tabBarIcon: ({ color, size }) => <Icon name={'bookmarks-outline'} size={size} color={color} /> }} />
                    <Tab.Screen name="Search" component={SearchNavigation} options={{ tabBarIcon: ({ color, size }) => <Icon name={'search'} size={size} color={color} /> }} />
                    <Tab.Screen name="Profile" component={ProfileNavigation} options={{ tabBarIcon: ({ color, size }) => <Icon name={'person-circle-outline'} size={size} color={color} /> }} />
                </Tab.Navigator>
            }

            {!isLoggedIn &&
                <Stack.Navigator screenOptions={{ ...stackScreenOptions }}>
                    <Stack.Screen name="LoginRegisterScreen">
                        {props => <LoginRegisterScreen {...props} onLogin={handleLogin} />}
                    </Stack.Screen>

                    {/* <Stack.Screen name="IndexScreen">
                        {props => <IndexScreen {...props} />}
                    </Stack.Screen> */}

                </Stack.Navigator>
            }

        </NavigationContainer>
    );
};



export default App;

//AsyncStorage