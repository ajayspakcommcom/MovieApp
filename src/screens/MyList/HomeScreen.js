import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import MovieList from '../../components/movies/MovieList';
import { MOVIES } from '../../data/movies';

const HomeScreen = () => {

    const [movie, setMovie] = useState([]);

    const data = useSelector((state) => {
        return state.movies;
    });

    useEffect(() => {

        setMovie(data.data);

        return () => console.log('');
    }, [data]);

    return (
        <>
            <MovieList data={movie} isFlag={false} />
        </>
    )
}

export default HomeScreen;
