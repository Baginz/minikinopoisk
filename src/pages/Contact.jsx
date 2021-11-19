import React from 'react';
import { useNavigate, Link } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact</h1>
            <p>Contact</p>
            <button onClick={() => navigate(-1)}>Go back</button>
            <Link to="/" >Go home</Link>
        </div>
    );
};

export default Contact;
