
import { MOVIES } from "../data/movies";

const getMovieById = (id) => {
    const movie = MOVIES.find(m => m.id === id);
    return movie;
};

export { getMovieById };