import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { Searchbar } from 'react-native-paper';
import MovieList from '../../components/movies/MovieList';
import { MOVIES } from '../../data/movies';
import Heading from '../../components/Ui/Heading';
import Colors from '../../styles/Colors';


const HomeScreen = ({ navigation, route }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState(MOVIES);
    const [fiteredMovies, setFilteredMovies] = useState(movies);

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        const filteredArray = searchQuery ? movies.filter(movie => movie.name.includes(searchQuery)) : movies;
        setFilteredMovies(filteredArray);
    };

    const onClearHandler = () => {
        setFilteredMovies(movies);
    };

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        setMovie(MOVIES);
        return () => setMovie([]);
    }, [movie]);

    const onDetailNavigation = (id) => {
        navigation.navigate('DetailScreen', { id: id });
    };

    return (
        <>
            <View style={styles.searchWrapper}>
                <Searchbar placeholder="Search Movie" onChangeText={onChangeSearch} value={searchQuery} onClearIconPress={onClearHandler} />
            </View>
            <View style={styles.movieList}>
                {movie.length >= 0 && <MovieList data={fiteredMovies} isFlag={false} onItemId={onDetailNavigation} />}
                {movie.length <= 0 && <View><Text style={styles.text}>Emypty List</Text></View>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({



    searchWrapper: {
        paddingVertical: 30,
        paddingHorizontal: 15
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
