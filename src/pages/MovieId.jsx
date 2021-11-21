import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader'
import notf from '../images/notf.png'


const urlPoster = "https://image.tmdb.org/t/p/w500";

const MovieId = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(useLocation());
    const [movie, setMovie] = useState({});
    const [fetch, isLoading, error] = useFetching(async (language = "ru") => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                api_key: 'ad2b38c3623133c5e9dd093465546d14',
                language: language,
            }
        })
        setMovie(response.data);
        console.log(response.data);
    })

    useEffect(() => {
        fetch()
    }, [id])


    return (
        <>
            {isLoading
                ? <Loader />
                : <>
                    <div style={{ display: "flex" }}>
                        <div className="card">
                            <img src={movie.poster_path ? urlPoster + movie.poster_path : notf} alt="" className="src" />
                            <div className="card-container">
                                <h2 style={{ cursor: "pointer", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{movie?.title}</h2>
                                <p>{movie?.release_date}</p>
                                <h3>Оценка  {movie?.vote_average}  <span style={{ fontWeight: "300", fontSize: "12px" }}>{movie?.vote_count}</span></h3>
                            </div>
                        </div>
                        <br />
                        <div className="movie-info">
                            <h1>О фильме</h1>
                            <h2>Оригинальное название </h2><p>  {movie?.original_title}</p>
                            <h2>Id </h2><p>  {movie?.id}</p>
                            <h2>IMDB Id</h2><p>  {movie?.imdb_id}</p> 
                            <h2>Статус</h2><p>  {movie?.status}</p>
                            <h2>Дата выхода</h2><p>  {movie?.release_date}</p>
                            <h2>Сайт</h2><p>  {movie?.homepage}</p>
                            <h2>Время</h2><p>  {movie?.runtime} мин.</p>
                            <h2>Бюджет</h2><p>  {movie?.budget}</p>
                            <h2>Сборы в мире</h2><p>  {movie?.revenue}</p>
                            <h2>Популярность</h2><p>  {movie?.popularity}</p>
                            <h2>Описание</h2><p>  {movie?.overview}</p>

                        </div>
                    </div>
                    <button className="back-button" onClick={() => navigate(-1)}>Go back</button>

                    <Link to="/" ><button className="back-button" >
                        Go home
                    </button ></Link>
                </>
            }

        </>
    )
}

export default MovieId
