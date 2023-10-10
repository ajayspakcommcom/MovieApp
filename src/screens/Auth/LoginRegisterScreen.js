import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const LoginRegisterScreen = ({ onLogin }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Login" onPress={onLogin} />
        </View>
    )
}

export default LoginRegisterScreen;