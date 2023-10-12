import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MovieItem from './MovieItem';
import { useDispatch } from 'react-redux';
import { addToWatchList } from '../../store/slices/movieSlice';

const MovieList = ({ data, isFlag = true }) => {

    const dispatch = useDispatch();

    const [movieData, setMovieData] = useState([]);

    const [watchList, setWatchList] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        setMovieData(data);
        return () => setMovieData([]);
    }, [data]);



    const togglewatchList = (movie) => {
        if (watchList.some(w => w.id === movie.id)) {
            setWatchList(prev => prev.filter(w => w.id !== movie.id));
        } else {
            setWatchList(prev => [...prev, movie]);
        }
    };


    useEffect(() => {
        dispatch(addToWatchList([...watchList]));

        return () => console.log('');
    }, [watchList]);

    const onDetailPressHandler = (id) => {
        navigation.navigate('DetailScreen', { id: id });
    };


    return (
        <View>
            <FlatList
                numColumns={3}
                data={movieData}
                renderItem={({ item }) => <MovieItem isFlag={isFlag} {...item} icon={watchList.some(w => w.id === item.id) ? 'bookmark' : 'bookmark-outline'} onBookMarkPress={togglewatchList.bind(null, item)} onDetailPress={onDetailPressHandler.bind(null, item.id)} />}
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