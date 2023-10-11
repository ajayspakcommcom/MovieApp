import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Styles from '../../styles/Styles';

const Heading = ({ heading, align = 'center', size = 35, style }) => {

    const styles = StyleSheet.create({
        heading: {
            color: Colors.lotion,
            fontSize: size,
            textAlign: align,
            fontFamily: Fonts.SemiBold
        }
    });

    return (
        <Text style={[styles.heading, style]}>{heading}</Text>
    )
}



export default Heading;