import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import Loader from '../UI/Loader/Loader'
import './MovieList.css'

const MovieList = ({ isLoading, movies }) => {


    if (movies?.results?.length === 0) {
        return (<h1 style={{ textAlign: 'center' }}>Фильмы не найдены </h1>)
    }
    return (
        <div style={{ padding: "30px" }}>
            {isLoading
                ? <Loader />
                : <div className="movie-grid">
                    {movies?.results?.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
                </div>
            }
        </div>
    )
}

export default MovieList
