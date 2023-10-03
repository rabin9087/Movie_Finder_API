import React, { useRef, useState, useEffect } from "react";
import CustomCard from "./CustomCard";
import { fetchMovie } from "./utils/axiosHelper";
import randomGenerator from "./utils/randomStr";

const SearchForm = ({ addToMovieList, movieList }) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  const strRef = useRef("");

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    setMovie({});
    setError("");
    const str = strRef.current.value;
    const data = await fetchMovie(str);

    if (data.Response === "True") {
      const isM= movieList.find((movie) => movie.imdbID === data.imdbID);
      if(!isM){
        setMovie(data);
      } else{
        alert("Movie is already exist")
      }
      
    } else {
      setError(data.Error);
      setMovie({});
    }
  };

  useEffect(() => {
    const randChar = randomGenerator();

    // IEFE
    (async () => {
      const randomMovie = await fetchMovie(randChar);
      setMovie(randomMovie);
    })();
  }, []);

  const func = (mode) => {
    console.log("Mode:", mode);
    if (mode === "happy" || mode === "action") {
      addToMovieList({ ...movie, mode });
      setMovie({});
      strRef.current.value = "";
    } else {
      setMovie({});
      strRef.current.value = "";
    }
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row gap-2">
        <div className="col-md">
          <form onSubmit={handelOnSubmit}>
            <div className="mb-3">
              <input
                ref={strRef}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Search movie ..."
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-warning">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-md d-flex justify-content-center">
          {error && <div className="alert alert-danger">{error}</div>}
          {movie?.imdbID && <CustomCard movie={movie} func={func} />}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
