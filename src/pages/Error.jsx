import React from 'react';
import logo from '../images/404.jpg'

const Error = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'red'}}>
                Вы перешли на несуществующую страницу!   
            </h1>
            <img src={logo} alt="" srcset="" />
        </div>
    );
};

export default Error;
