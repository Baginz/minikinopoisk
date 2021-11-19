import React from 'react'
import { useNavigate } from 'react-router-dom';
import notf from '../../images/notf.png'
import './MovieCard.css'

const urlPoster = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {

    const navigate = useNavigate();
    return (
        <div className="card">
            <img src={movie.poster_path ? urlPoster + movie.poster_path : notf} alt="" className="src" onClick={() => navigate(`/${movie?.id}/`)} />
            <div className="container">
                <h2 onClick={() => navigate(`/${movie?.id}/`)} style={{ cursor: "pointer" }}>{movie?.title}</h2>
                <p>{movie?.release_date}</p>
                <h3>Оценка  {movie?.vote_average}  <span style={{fontWeight: "300", fontSize: "12px"}}>{movie?.vote_count}</span></h3>
            </div>
        </div>

    )
}

export default MovieCard
