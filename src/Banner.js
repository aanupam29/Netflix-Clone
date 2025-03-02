import axios from "./axios";
import React, { useState, useEffect } from 'react'
import requests from "./requests";
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchdata() {
            const request = await axios.get(requests.fetchNetflixOrginials);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            )
        }
    
        fetchdata();
    
      }, [])

      function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str; 
      }

    return (
        <header className="banner" style={{backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center center"}} >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 200)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
