import React, { useEffect, forwardRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Colors from '../../styles/Colors';

const CustomInput = ({ mode = 'outlined', placeholder = 'placeholder', outlineColor = Colors.blackOlive, activeOutlineColor = Colors.sunglow, textColor = Colors.philippineGray, onTextChangeHandler, secureTextEntry = false, style }) => {

    const styles = StyleSheet.create({
        input: {
            backgroundColor: 'transparent'
        }
    });

    const onChangeTextHandler = (text) => {
        onTextChangeHandler(text);
    };


    return (
        <TextInput
            secureTextEntry={secureTextEntry}
            mode={mode}
            placeholder={placeholder}
            outlineColor={outlineColor}
            activeOutlineColor={activeOutlineColor}
            textColor={textColor}
            onChangeText={onChangeTextHandler}
            style={[styles.input, style]}
        />
    )
}

export default CustomInput;