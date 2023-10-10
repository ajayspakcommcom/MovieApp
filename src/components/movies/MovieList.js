import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { MOVIES } from '../../data/movies';
import MovieItem from './MovieItem';

const MovieList = () => {

    const [movieData, setMovieData] = useState([]);

    const [bookmarkedIds, setBookmarkedIds] = useState({});

    useEffect(() => {
        setMovieData(MOVIES);
        return () => setMovieData([]);
    }, []);

    const onBookMarkPressHandler = (id) => {
        setBookmarkedIds((prevBookmarkedIds) => {
            return { ...prevBookmarkedIds, [id]: !prevBookmarkedIds[id] };
        });
    };

    return (

        <View>
            <FlatList
                numColumns={3}
                data={movieData}
                renderItem={({ item }) => <MovieItem {...item} icon={bookmarkedIds[item.id] ? 'bookmark' : 'bookmark-outline'} onBookMarkPress={onBookMarkPressHandler.bind(null, item.id)} />}
                keyExtractor={item => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default MovieList;