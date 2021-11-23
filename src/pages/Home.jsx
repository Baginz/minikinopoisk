import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import SearchandFilter from "../components/SearchandFilter/SearchandFilter";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/UI/pagination/Pagination";



const Home = () => {

    const [movies, setMovies] = useState({});
    const [query, setQuery] = useState("Iron");
    const [language, setLanguage] = useState();
    const [year, setYear] = useState('');
    const [page, setPage] = useState(1);
    const [adult, setAdult] = useState(false);
    const [fetch, isLoading, error] = useFetching(async (query, page = 1, language = "ru", year, adult ) => {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: 'ad2b38c3623133c5e9dd093465546d14',
                language: language,
                query: query,
                page: page,
                year: year,
                include_adult: adult

            }
        })
        setMovies(response.data);
        console.log(response.data);
    })

    useEffect(() => {
        console.log(query)
        fetch(query, page, language, year, adult)
    }, [query, page, language, year, adult])

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "50px"}}>Кинопоиск</h1>
            <SearchandFilter setQuery={setQuery} setPage={setPage} setLanguage={setLanguage} year={year} setYear={setYear} adult={adult} setAdult={setAdult}/>
            <MovieList isLoading={isLoading} movies={movies} />
            {Object.keys(movies).length === 0 || movies?.results?.length === 0
                ? ''
                : <Pagination totalPages={movies?.total_pages} page={page} changePage={changePage} />
            }
        </div>
    );
};

export default Home;
