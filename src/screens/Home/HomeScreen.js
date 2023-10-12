import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { MOVIES } from '../../data/movies';
import MovieList from '../../components/movies/MovieList';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation, route }) => {

    const [data, setData] = useState('');

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value);
        } catch (e) {
            console.log(e);
        }
    };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key');
            if (value !== null) {
                console.log(value);
                setData(value);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, [storeData]);

    const onDetailNavigation = (id) => {
        navigation.navigate('DetailScreen', { id: id });
    };

    return (
        <>
            <MovieList data={MOVIES} onItemId={onDetailNavigation} />
        </>
    )
}

export default HomeScreen;