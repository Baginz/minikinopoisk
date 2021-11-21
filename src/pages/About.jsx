import React from 'react';
import { useNavigate, Link } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>KEKW</h1>
            <p>Это приложение создано личинкой Web разработчика</p>
            <button className="back-button" onClick={() => navigate(-1)}>Go back</button>

            <Link to="/" ><button className="back-button" >
                Go home
            </button ></Link>
        </div>
    );
};

export default About;
