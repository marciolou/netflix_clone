import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api'

import './Row.css'

const imageHost = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, path, isLarge }) => {

  const [movies, setMovies] = useState([])

  const fetchMoveis = async (_path) => {
    try {
      const data = await getMovies(_path)
      setMovies(data?.results)
    } catch (error) {
      console.log("Fech movies error:", error)
    }
  }

  useEffect(() => {
    fetchMoveis(path)
  }, [path])

  return (
    <div className='row-container'>
      <h2 className='row-header'>{title}</h2>
      <div className='row-cards'>
        {movies?.map(movie => {
          return (
            <img className={`movie-card ${isLarge && 'movie-card-large'}`} key={movie.id} src={`${imageHost}${movie.poster_path}`} alt={movie.name} />
          )
        })}
      </div>
    </div>
  )
}

export default Row