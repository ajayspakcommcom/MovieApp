import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, Platform } from "react-native";




const IndexScreen = () => {

    const showNotification = () => {
        PushNotification.localNotification({
            channelId: 'your-channel-id', // Provide channel ID
            title: 'Hello',
            message: 'This is a local notification!',
        });
    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        </View>
    )
}

export default IndexScreen;