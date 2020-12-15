import React from 'react';
import MovieCard from './components/MovieCard/MovieCard';

export default function App() {

  const SearchMovieStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div className="SearchMovie" style={SearchMovieStyle}>
      <MovieCard />
    </div>
  )
}
