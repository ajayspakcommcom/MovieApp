import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const ReviewList = ({ name, rate, badgeBgColor = { backgroundColor: Colors.sunglow, color: Colors.lotion }, paragraph }) => {

    const styles = StyleSheet.create({

        reviewUserWrapper: {
            marginBottom: 15,
        },

        reviewHeader: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: Colors.blackOlive,
            borderRadius: 5,
            paddingVertical: 10,
            paddingRight: 15,
            alignItems: 'flex-start',
            justifyContent: 'space-between'
        },

        reviewLeftSection: {
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },


        userStarWrapper: {
            position: 'relative',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center'
        },

        userStarIcon: {
            position: 'absolute',
            top: 1,
            left: '90%',
        },

        reviewHeaderRightSection: {
            justifyContent: 'center'
        },

        reviewerName: {
            color: Colors.philippineGray,
            fontSize: 16,
            fontWeight: '600'
        },

        paragraph: {
            color: Colors.philippineGray,
            fontSize: 12
        },

        ratingText: {

        }
    });

    return (
        <>
            <View style={styles.reviewUserWrapper}>
                <View style={styles.reviewHeader}>
                    <View style={styles.reviewLeftSection}>
                        <View style={styles.userStarWrapper}>
                            <Icon size={30} icon={'user'} color={Colors.blackOlive} />
                            <View style={styles.userStarIcon}>
                                <Icon size={15} icon={'star'} color={Colors.blackOlive} />
                            </View>
                        </View>
                        <View style={styles.reviewHeaderRightSection}>
                            <Text style={styles.reviewerName}>{name}</Text>
                            <Text style={styles.paragraph}>{paragraph.toString().substring(0, 28)}</Text>
                        </View>
                    </View>
                    <View><Badge style={{ ...badgeBgColor }} size={30}>{rate}</Badge></View>
                </View>
            </View>
        </>
    );
};

export default ReviewList;



