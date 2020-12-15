import React, { useState } from 'react'
import MovieCardContent from '../MovieCardContent/MovieCardContent'
import MovieCardSearch from '../MovieCardSearch/MovieCardSearch'

export default function MovieCard() {

    const [ state, setState ] = useState({
        movieInformation: []
    })

    const MovieCardStyle = {
        width: '800px',
        height: '400px',
        backgroundColor: "#FFF",
        borderRadius: 15,
        paddingLeft: '150px',
        display: "flex",
        flexDirection: "column"
    }

    const saveInformation = (data) => {
        setState({ ...state, movieInformation: data })
    }

    return (
        <div className="MovieCard" style={MovieCardStyle}>
            <MovieCardSearch saveInformation={(data) => saveInformation(data)}/>
            <MovieCardContent movieData={state.movieInformation} />
        </div>
    )
}
