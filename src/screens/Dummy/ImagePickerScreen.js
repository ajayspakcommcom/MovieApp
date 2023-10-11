import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, Platform } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



const IndexScreen = () => {

    const [image, setImage] = useState(null);

    const selectImage = () => {

        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                console.log(response)

                if (Platform.OS === 'android') {
                    console.log(response.assets[0].uri);
                    setImage(response.assets[0].uri);
                }
            }
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Select Image" onPress={selectImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    )
}

export default IndexScreen;