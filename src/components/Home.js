import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Home({search}) {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const fetchmovies =  async () => {
      const url = `http://www.omdbapi.com?apiKey=975c1230&s=${search ==="" ? "japan" : search}&type=movie`;
      let data =  await fetch(url);
      let parsedData = await data.json();
      let newdata =  parsedData.Search
      setMovies(newdata);
    };
    fetchmovies();
  },[search]);

  return (
   
    <div className="container">
      <div className="row my-3">
        {(movies)?(movies.map((movie)=>{
          console.log(movie)
          return <div className="col-md-4 my-2" key={movie.imdbID}>
            <MovieCard title={movie.Title} image = {movie.Poster} year = {movie.Year} />
            </div>
        })):console.log("error")}
      

        s
      </div>
    
    </div>

    
  );
}

export default Home;
