import React, { useEffect, useState } from 'react'
import './Banner.css'
import categories, { getMovies } from '../../api'

const Banner = () => {

    const [movie, setMovie] = useState({});

    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name === "netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        } catch (error) {
            console.log("Banner fetchRandomMovie error: ", error);
        }
    };

    useEffect(() => {
        fetchRandomMovie();
    }, []);

    return (
        <header className="banner-conteiner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            roundPosition: "center-center",
        }}
        >
            <div className="banner-content">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons-container">
                    <button className="banner-button">Assistir</button>
                    <button className="banner-button">Minha Lista</button>
                </div>
                <p className="banner-description">
                    {movie?.overview}
                </p>
            </div>
        </header>
    )
}

export default Banner