import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../../utils/constant';
import { addPopularMovies } from '../../utils/movieSlice';

const usePopularMovies = (movieId) => {

    const dispatch = useDispatch();

    const getPopularMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
        // console.log(json.results);
    };
    useEffect(()=>{ 
        getPopularMovies();
    },[]);
};

export default usePopularMovies