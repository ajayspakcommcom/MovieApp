import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import MovieList from '../../components/movies/MovieList';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {

    const [data, setData] = useState('');

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value);
        } catch (e) {
            // Saving error
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
            // Reading error
        }
    };

    useEffect(() => {
        getData();
    }, [storeData]);

    return (
        <>
            <MovieList />
        </>
    )
}

export default HomeScreen;