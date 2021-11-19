import React, { useEffect, useState } from "react";
import AppRouter from "../AppRouter";
import { AuthContext } from "../../context/";
import "./App.css";
import Navbar from "../UI/Navbar/Navbar";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
                isLoading,
            }}
        >
            <Navbar />
            <main>
                <AppRouter />
            </main>
            <footer>
                &copy; МиниКинопоиск 2021
            </footer>
        </AuthContext.Provider>
    );
}

export default App;
