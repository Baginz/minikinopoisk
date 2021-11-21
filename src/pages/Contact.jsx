import React from 'react';
import { useNavigate, Link } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact</h1>
            <p>Contact</p>
            <button className="back-button" onClick={() => navigate(-1)}>Go back</button>
            <Link to="/" ><button className="back-button" >
                Go home
            </button ></Link>
        </div>
    );
};

export default Contact;
