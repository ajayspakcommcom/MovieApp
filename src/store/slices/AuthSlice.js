import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';



const authSlice = createSlice({
    name: 'user',
    initialState: { userObj: null },
    reducers: {

        login: (state, action) => {
            state.userObj = action.payload;

            const handleLogin = async () => {
                await AsyncStorage.setItem('userToken', JSON.stringify(state));
            };

            handleLogin();

        },

        logout: (state) => {
            state.userObj = null;

            const handleLogout = async () => {
                console.log('Logout');
                await AsyncStorage.removeItem('userToken');
            };

            handleLogout();

        }
    }
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;