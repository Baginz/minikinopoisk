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
                : <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div className="card">
                        <img src={movie.poster_path ? urlPoster + movie.poster_path : notf} alt="" className="src" />
                        <div className="container">
                            <h2 >{movie?.title}</h2>
                            <p>{movie?.release_date}</p>
                            <h3>Оценка  {movie?.vote_average}  <span style={{fontWeight: "300", fontSize: "12px"}}>{movie?.vote_count}</span></h3>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <p>budget  {movie?.budget}</p>
                        <p>homepage  {movie?.homepage}</p>
                        <p>id  {movie?.id}</p>
                        <p>imdb_id  {movie?.imdb_id}</p>
                        <p>original_title  {movie?.original_title}</p>
                        <p>overview  {movie?.overview}</p>
                        <p>popularity  {movie?.popularity}</p>
                        <p>revenue  {movie?.revenue}</p>
                        <p>status  {movie?.status}</p>

                    </div>
                    <button onClick={() => navigate(-1)}>Go back</button>
                    <Link to="/" >Go home</Link>
                </div>
            }

        </>
    )
}

export default MovieId
