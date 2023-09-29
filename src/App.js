import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import SearchForm from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);
  const addToMovieList = (movie) => {
    setMovieList([...movieList, movie]);
  };


  return (
    <div className="wrapper bg-dark text-warning min-vh-100">
      <div className="container">
        {/* {title} */}
        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center"> My Movie Collection</h1>
          </div>
        </div>
        <hr />

        {/* {Search area} */}
        {/* {=> form} */}
        {/* [=> card] */}
        <SearchForm addToMovieList={addToMovieList}/>

        {/* {movie list section} */}
        {/* {=> button} */}
        {/* {=> card} */}
        <Display movieList={movieList} setMovieList ={setMovieList}/>
      </div>
    </div>
  );
}

export default App;
