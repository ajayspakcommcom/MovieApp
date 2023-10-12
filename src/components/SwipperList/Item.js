
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Colors from '../../styles/Colors';

const Item = ({ src, name }) => {

    return (
        <View style={[styles.imageWrapper]}>
            <Text>{name}</Text>
        </View>
    );
};


export default Item;

const styles = StyleSheet.create({

    imageWrapper: {
        elevation: 5,
        shadowColor: Colors.sunglow,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        borderRadius: 5,
        borderRadius: 2,
        width: '100%',
        backgroundColor: Colors.sunglow
    },

    image: {
        flex: 1,
        width: 400,
        height: 200,
        borderRadius: 2,
        resizeMode: 'cover'
    }
});



