import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {

    const movies = useSelector(state => state.movies);
    return (
        <div>        
        <MovieList title={"Now PlayingMovies"} movies={movies.nowPlayingMovies}/>
        <h1>Secondary Container</h1>
        </div>
    );
    }
export default SecondaryContainer