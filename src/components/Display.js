import React, { useState } from "react";
import CustomCard from "./CustomCard";

const Display = ({ movieList, setMovieList }) => {
  const [movieType, setMovieType] = useState("all");

  const handelMoviesType = (type) => {
    setMovieType(type);
  };

  const happyMovies = movieList.filter((movie) => movie.mode === "happy");
  const actionMovies = movieList.filter((movie) => movie.mode === "action");

  const displayMovieTypes = () => {
  
    if (movieType === "all" || movieType === "") {
      return movieList;
    } else if (movieType === "happy") {
      return happyMovies;
    } else if (movieType === "action") {
      return actionMovies;
    }
  };

  const func =(mode) => {

    const updatedMovie = movieList.filter((movie) => movie.imdbID !== mode);
    setMovieList(updatedMovie);
  }

  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5">
      <div className="row ">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handelMoviesType("all")}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => handelMoviesType("happy")}
            >
              Happy
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => handelMoviesType("action")}
            >
              Action
            </button>
          </div>
          <div className="mt-3">
            {displayMovieTypes().length + " "} movies found!
          </div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-wrap gap-3 justify-content-between">
          {displayMovieTypes().map((item, i) => (
            <CustomCard key={i} movie={item} func={func}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
