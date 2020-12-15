import Axios from 'axios';
import React from 'react';
import {
    Key,
    DefaultTitle,
    Url
} from '../../ApiCaller'

export default function MovieCardSearch({ saveInformation }) {

    const MovieCardSearchStyle = {
        width: '100%',
        height: '50px',
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '30px'
    }

    const searchMovie = (movieValue) => {
        Axios.get(Url + movieValue)
            .then((response) => {
                saveInformation(response.data)
            })
    }

    return (
        <div className="MovieCardSearch" style={MovieCardSearchStyle}>
            <input type="text" onKeyPress={(e) => e.key == "Enter" ? searchMovie(e.target.value) : void(0)}/>
        </div>
    )
}
