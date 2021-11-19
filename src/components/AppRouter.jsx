import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";
import Error from '../pages/Error';
import About from '../pages/About';
import Login from '../pages/Login';
import Home from '../pages/Home';
import News from '../pages/News';
import Contact from '../pages/Contact';
import MovieId from '../pages/MovieId';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/:id" element={<MovieId />} />
                <Route path="*" element={<Error />} />
            </Routes>
            :
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Login />} />
            </Routes>
    );
};

export default AppRouter;
