import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Styles from '../../styles/Styles';


const CustomButton = ({ text, onPressHanlder, textSize = 18 }) => {

    const styles = StyleSheet.create({
        button: {
            display: 'flex',
            borderRadius: 5,
            paddingVertical: 15,
            backgroundColor: Colors.sunglow,
        },

        text: {
            textAlign: 'center',
            fontFamily: Fonts.SemiBold,
            fontSize: textSize
        },

        rippleEffect: {
            color: Colors.venetianRed
        }
    });


    return (
        <Pressable style={[styles.button]} android_ripple={{ ...styles.rippleEffect }} onPress={onPressHanlder}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton;