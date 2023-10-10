import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';


const App = () => {

    const tap = Gesture.Tap().onStart((e) => console.log(e));

    return (
        <GestureHandlerRootView style={styles.body}>
            <GestureDetector gesture={tap}>
                <View style={styles.box}></View>
            </GestureDetector>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },

    box: {
        width: 200,
        height: 200,
        borderRadius: 10,
        backgroundColor: 'red'
    }

});

export default App;