

import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, Button } from 'react-native';
import PagerView from 'react-native-pager-view';
import { REVIEW } from '../../data/user-review';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../styles/Colors';
import { AirbnbRating } from 'react-native-ratings';

const SwipperList = ({ userData }) => {

    const [data, setData] = useState(REVIEW);
    const [pageViewIndxPos, setPageViewIndxPos] = useState(0);

    useLayoutEffect(() => {

        const indxPos = data.findIndex(item => item.id === userData.id);
        console.log('index', indxPos);
        setPageViewIndxPos(indxPos);

    }, []);


    return (

        <>
            <View style={styles.container}>
                {pageViewIndxPos &&
                    <PagerView style={styles.pagerView} initialPage={0}>

                        {REVIEW.map(item =>
                            <View style={styles.page} key={item.id}>
                                <View style={styles.pageItem}>
                                    <View style={styles.header}>
                                        <Icon icon={'person-circle-outline'} color={'red'} size={40} />
                                        <Text style={styles.nameText}>{item.name}</Text>
                                    </View>
                                    <View style={styles.reviewParaWrapper}>
                                        <Text style={styles.reviewPara}>{item.paragraph}</Text>
                                    </View>
                                    <View style={styles.footerWrapper}>
                                        <View>
                                            <Text style={styles.stylesfooterHeading}>MY REVIEW</Text>
                                            <View style={styles.reviewBottomBorder}></View>
                                        </View>
                                        <View style={styles.footerFooterSection}>
                                            <View style={styles.footerRatingTextWrapper}>
                                                <Text style={styles.footerRatingText}>{item.rate}</Text>
                                            </View>
                                            <View>
                                                <AirbnbRating
                                                    count={5}
                                                    reviews={["Bad", "OK", "Good", "Very Good", "Awesome"]}
                                                    defaultRating={4.5}
                                                    size={15}
                                                    reviewSize={5}
                                                    showRating={false}
                                                    isDisabled={false}
                                                    selectedColor={Colors.sunglow}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>)
                        }

                    </PagerView>
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    // container: {
    //     flex: 1,
    //     backgroundColor: Colors.chineseBlack,
    //     borderRadius: 20,
    //     padding: 15
    // },

    // pagerView: {
    //     flex: 1
    // },

    // page: {
    //     paddingHorizontal: 10
    // },

    // pageItem: {
    //     flex: 1,
    //     borderRadius: 5,
    //     backgroundColor: Colors.philippineGray,
    //     paddingHorizontal: 15
    // },

    // text: {
    //     fontSize: 30,
    //     textAlign: 'center',
    //     color: Colors.blackOlive
    // },

    // header: {
    //     flexDirection: 'row',
    //     alignItems: 'center'
    // },

    // nameText: {
    //     color: Colors.lotion,
    //     paddingLeft: 15,
    //     fontSize: 18
    // },

    // reviewParaWrapper: {
    //     paddingVertical: 15
    // },

    // reviewPara: {
    //     lineHeight: 20,
    //     color: Colors.lotion,
    //     textAlign: 'justify'
    // },

    // footerWrapper: {
    //     paddingVertical: 20,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },

    // stylesfooterHeading: {
    //     fontSize: 20,
    //     color: Colors.lotion,
    //     fontWeight: '600'
    // },

    // reviewBottomBorder: {
    //     paddingTop: 5,
    //     borderBottomColor: Colors.sunglow,
    //     borderBottomWidth: 2
    // },

    // footerFooterSection: {
    //     alignItems: 'flex-start',
    //     justifyContent: 'flex-start',
    //     flexDirection: 'row',
    //     paddingTop: 15
    // },

    // footerRatingTextWrapper: {
    //     paddingRight: 15
    // },

    // footerRatingText: {
    //     color: Colors.lotion,
    //     fontWeight: '600',
    //     fontSize: 25
    // }
});

export default SwipperList;






