import React from 'react'

export default function MovieCardContent({ movieData }) {
    console.log(movieData);
    const MovieCardContentStyle = {
        width: '100%',
        height: 'calc(100% - 50px)',
        backgroundColor: 'tomato'
    }
    return (
        <div style={MovieCardContentStyle}>
            { movieData.Title }
        </div>
    )
}
