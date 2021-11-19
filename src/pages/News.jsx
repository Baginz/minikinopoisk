import React from 'react'
import { useNavigate, Link} from 'react-router-dom'

const News = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>News</h1>
            <p>News</p>
            <button onClick={() => navigate(-1)}>Go back</button>
            <Link to="/" >Go home</Link>
        </div>
    )
}

export default News
