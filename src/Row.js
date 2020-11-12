import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl, isLargerow }) => {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailer] = useState("");
  //[] empty brackey only on page load
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      // console.log(request);
    }
    fetchData();
  }, [fetchUrl]); //make a requetst from api to display in row
  //if bracket [] run once the row load and dont run it again
  //if bracket [movies] if any change in movies useeffect will run
  //console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie, row) => {
    if (trailerUrl) {
      setTrailer("");
    } else {
      console.log(movie);
      let name = "";
      if (movie.original_name == null) {
        name = movie?.title;
      } else if (movie?.original_title == null) {
        name = movie?.original_name;
      }

      movieTrailer(name || "")
        .then((url) => {
          console.log(url);
          // URL is used to get the value after ? the URLSearchparams is used to get the particular key after ?
          const urlParams = new URL(url).searchParams;
          setTrailer(urlParams.get("v"));
          console.log(URL(url).search);
        })
        .catch((error) => console.log(error + "errrrr" + movie.name));
    }
  };

  return (
    <div className="row">
      <h2>{movies && title}</h2>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      <div className="row_post">
        {isLargerow
          ? movies.map((movie) => {
              return (
                <img
                  className="img_contain"
                  src={base_url + movie.backdrop_path}
                  alt={movie.name}
                  onClick={() => {
                    handleClick(movie);
                  }}
                />
              );
            })
          : movies.map((movie) => {
              return (
                <img
                  className="img_contain_large"
                  onClick={() => {
                    handleClick(movie);
                  }}
                  src={base_url + movie.poster_path}
                  alt={movie.name}
                />
              );
            })}
      </div>
      {/* title  */}
      {/* container posts*/}
      {/*  */}
    </div>
  );
};

export default Row;
