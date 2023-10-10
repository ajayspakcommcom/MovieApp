import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, Platform, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../styles/Colors';


const MovieItem = ({ name, src, icon = 'bookmarks', onPress, paragraph, onBookMarkPress }) => {
    return (
        <View style={styles.imgWrapper}>
            <Pressable style={styles.bookMark} onPress={onBookMarkPress}>
                <Icon name={icon} size={24} color={Colors.sunglow} />
            </Pressable>
            <Image source={src} style={styles.img} />
        </View>
    );
};

const styles = StyleSheet.create({
    imgWrapper: {
        position: 'relative',
        width: '33.33%',
        height: 220,
        padding: 5,
        ...Platform.select({
            android: {
                elevation: 60,
            },
        }),
    },

    bookMark: {
        position: 'absolute',
        zIndex: 1,
        top: 5,
        right: 5
    },

    img: {
        width: '100%',
        height: 220,
        borderRadius: 10
    }
});

export default MovieItem;