import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Button, Text, View, StyleSheet, Image, ScrollView, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieList from '../../components/movies/MovieList';
import { REVIEW } from '../../data/user-review';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../styles/Colors';
import { getMovieById } from '../../utils/Common';
import CustomButton from '../../components/Ui/CustomButton';
import ReviewList from '../../components/Review/ReviewList';
import SwipperList from '../../components/SwipperList/SwipperList';


const DetailScreen = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [reviewData, setReviewData] = useState(REVIEW);
    const [reviewUser, setReviewUser] = useState(null);

    useLayoutEffect(() => {
        const movieId = route.params.id
        const movie = getMovieById(movieId);
        setSelectedItem(movie)
        const backButtonHandler = () => {
            navigation.navigate('HomeScreen');
        };

        navigation.setOptions({
            title: ``,
            headerLeft: () => {
                return <Icon name={'arrow-back'} size={25} color={'#fff'} onPress={backButtonHandler} />
            },
            headerRight: () => {
                return <Icon name={'share'} size={25} color={'#fff'} />
            }
        });

        return () => console.log('UnMount Detail');
    }, []);

    const getCurrentUserReviewData = (id) => {
        const reviewUserData = reviewData.find(data => data.id === id);
        console.log(reviewUserData);
        setReviewUser(reviewUserData);
    };


    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {selectedItem && <Image source={selectedItem.src} style={styles.image} />}
                <View style={styles.nameParaSection}>
                    <Text style={styles.movieName}>{selectedItem.name}</Text>
                    <Text style={styles.moviePara}>{selectedItem.paragraph}</Text>
                    <CustomButton text={'More...'} style={{ marginTop: 15 }} />
                </View>
            </View>

            <View style={styles.reviewWrapper}>
                {reviewData.map(item =>
                    <Pressable onPress={() => { setModalVisible(!modalVisible), getCurrentUserReviewData(item.id) }} key={item.id}>
                        <ReviewList name={item.name} rate={item.rate} paragraph={item.paragraph} />
                    </Pressable>
                )}
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}
                statusBarTranslucent={false}
            >
                <View style={styles.modalWrapper}>
                    <View style={styles.closeBtnWrapper}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Icon name={'close'} size={30} color={Colors.philippineGray} />
                        </Pressable>
                    </View>
                    <SwipperList userData={reviewUser} />
                </View>
            </Modal>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    scrollView: {
        padding: 20
    },

    // modals
    modalWrapper: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flex: 1,
        backgroundColor: Colors.mainDrakBg,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 20
    },

    closeBtnWrapper: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginBottom: 10
    },
    // modals

    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20
    },

    image: {
        width: '40%',
        height: 200,
        borderRadius: 5
    },

    nameParaSection: {
        paddingLeft: 15,
        width: '60%'
    },

    movieName: {
        color: Colors.philippineGray,
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 8
    },

    moviePara: {
        color: Colors.philippineGray,
        textAlign: 'auto',
        fontSize: 15,
        letterSpacing: 1
    },

    reviewWrapper: {
        paddingVertical: 20
    },
});

export default DetailScreen;