import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight } from "react-native";
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { logout } from '../../store/slices/AuthSlice';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import Styles from '../../styles/Styles';


const HomeScreen = () => {

    const dispatch = useDispatch();
    const imgUrl = 'https://st3.depositphotos.com/11585370/19184/i/450/depositphotos_191841156-stock-photo-horizontal-headshot-of-handsome-business.jpg';

    const ListItem = ({ icon, text, link, color = Colors.philippineGray, onPress }) => {

        const styles = StyleSheet.create({
            button: {
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: Colors.philippineGray,
                paddingBottom: 15,
                marginTop: 15
            },

            leftContent: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            },

            text: {
                color: Colors.philippineGray,
                marginLeft: 8
            }
        });

        return (
            <>
                <TouchableHighlight onPress={onPress} activeOpacity={0.8}>
                    <View style={styles.button}>
                        <View style={styles.leftContent}>
                            <Icon name={icon} size={24} color={color} />
                            <Text style={styles.text}>{text}</Text>
                        </View>
                        <Icon name={'arrow-forward-circle-outline'} size={25} color={Colors.philippineGray} />
                    </View>
                </TouchableHighlight>
            </>
        );
    };


    const onPressHandler = () => {
        console.log('onPressHandler');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftContent}>
                    <Image source={{ uri: imgUrl }} style={styles.img} />
                    <View>
                        <Text style={styles.name}>Ajay</Text>
                        <Text style={styles.email}>ajayvishwakarma457@gmail.com</Text>
                        <Text style={styles.signout} onPress={() => dispatch(logout())}>Sign Out</Text>
                    </View>
                </View>
                <View style={styles.rightContent}><Icon name={'pencil'} size={24} color={Colors.lotion} /></View>
            </View>
            <View style={styles.actionList}>
                <ListItem onPress={onPressHandler} icon={'notifications-outline'} text={'Notification'} link={'notifications-outline'} key={1} />
                <ListItem onPress={onPressHandler} icon={'bookmarks-outline'} text={'My List'} link={'bookmarks-outline'} key={2} />
                <ListItem onPress={onPressHandler} icon={'settings-outline'} text={'App Settings'} link={'settings-outline'} key={3} />
                <ListItem onPress={onPressHandler} icon={'person'} text={'Account'} link={'person'} key={4} />
                <ListItem onPress={onPressHandler} icon={'help-sharp'} text={'Help'} link={'help-sharp'} key={5} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingTop: 25
    },

    leftContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15
    },

    name: {
        fontSize: 13,
        color: Colors.lotion,
        fontFamily: Fonts.Light
    },

    email: {
        fontSize: 13,
        color: Colors.philippineGray,
        fontFamily: Fonts.Light
    },

    signout: {
        fontSize: 13,
        color: Colors.sunglow,
        fontFamily: Fonts.Light
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    actionList: {
        marginTop: 40
    }
});

export default HomeScreen;