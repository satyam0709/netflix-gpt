import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
    console.log(movies);
  return (
    <div>
        <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <div className="flex overflow-x-scroll space-x-4">


            {movies?.map((movie) => (                    
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default MovieList