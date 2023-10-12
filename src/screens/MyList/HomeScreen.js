import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import MovieList from '../../components/movies/MovieList';
import { MOVIES } from '../../data/movies';
import Heading from '../../components/Ui/Heading';
import Colors from '../../styles/Colors';

const HomeScreen = ({ navigation, route }) => {

    const [movie, setMovie] = useState([]);

    const data = useSelector((state) => {
        return state.movies;
    });

    useEffect(() => {
        setMovie(data.data);
        return () => setMovie([]);
    }, [data]);

    const onDetailNavigation = (id) => {
        navigation.navigate('DetailScreen', { id: id });
    };

    return (
        <>
            <View style={styles.headingWrapper}>
                <Heading heading={'My List'} style={{ fontSize: 24 }} />
            </View>
            <View style={styles.movieList}>
                {movie.length >= 0 && <MovieList data={movie} isFlag={false} onItemId={onDetailNavigation} />}
                {movie.length <= 0 && <View><Text style={styles.text}>Emypty List</Text></View>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headingWrapper: {
        paddingVertical: 20
    },

    movieList: {
        flex: 1
    },

    text: {
        color: Colors.sunglow,
        textAlign: 'center',
        marginTop: '50%'
    }
});

export default HomeScreen;
