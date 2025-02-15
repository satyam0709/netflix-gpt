import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {

    const movies = useSelector(state => state.movies);
    return (
        <div className="bg-black">        
        <div className="-mt-52 relative pl-12 z-20" >
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"TopRated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        </div>
        </div>
    );
    }
export default SecondaryContainer