import React, { useContext } from 'react';
import { AuthContext } from "../context";

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1></h1>
            <form onSubmit={login}>
                <div className="login-container ">
                    <label for="uname"><b>Логин</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Пароль</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <label>
                        <input type="checkbox" name="remember" /> Запомнить меня
                    </label>
                    <button  className="login-button" type="submit">Войти</button>
                </div>
            </form>
            <p>Вводите любые данные(не реализовано на бэке)</p>
        </div>
    );
};

export default Login;