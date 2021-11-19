import React from 'react';
import { useNavigate, Link } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>KEKW</h1>
            <p>Это приложение создано личинкой Web разработчика</p>
            <button onClick={() => navigate(-1)}>Go back</button>
            <Link to="/" >Go home</Link>
        </div>
    );
};

export default About;
