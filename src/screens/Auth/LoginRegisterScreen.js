import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";
import Heading from '../../components/Ui/Heading';
import CustomInput from '../../components/Ui/CustomInput';
import CustomButton from '../../components/Ui/CustomButton';
import { login, logout } from '../../store/slices/AuthSlice';


const LoginRegisterScreen = ({ onLogin }) => {

    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const emailHandler = (text) => {
        setEmail(text);
    };

    const passwordHandler = (text) => {
        setPassword(text);
    };


    const headingStyles = {
        marginBottom: 30
    };

    const inputStyles = {
        marginBottom: 15
    };

    const onLoginHandler = () => {

        if (!email || !password) {
            Alert.alert('Enter Email and Password', 'Please enter email and password', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
        } else {
            dispatch(login({ id: nanoid(), uname: email, pswd: password }));
            onLogin();
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.contentWrapper}>
                <Heading heading={'Login'} style={{ ...headingStyles }} />
                <CustomInput onTextChangeHandler={emailHandler} placeholder={'Email'} style={{ ...inputStyles }} />
                <CustomInput onTextChangeHandler={passwordHandler} placeholder={'Password'} secureTextEntry={true} style={{ ...inputStyles }} />
                <CustomButton text={'Login'} onPressHanlder={onLoginHandler} />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentWrapper: {
        width: '100%',
    }
});

export default LoginRegisterScreen;