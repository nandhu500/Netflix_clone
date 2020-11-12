import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./Request";
import "./Banner.css";
import { Button } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const base_url = "https://image.tmdb.org/t/p/original";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: orange[500],
    },
  },
});

export const Banner = () => {
  const [movie, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchActionMovie);
      setmovies(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  //   always consolde log to testing before return

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* as title button and description is in header image we wrap it in header */}
        <div>
          <div className="banner">
            <img
              src={base_url + movie.backdrop_path}
              alt=""
              className="img_banner"
            />

            <div className="banner_contents">
              <img
                className="navbar"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/340px-Netflix_2015_logo.svg.png"
                alt=""
              />
              <h1 className="heading_text">
                {movie?.original_title || movie?.original_name}
              </h1>

              <h4 style={{ color: "#7CFC00", lineHeight: "0.1em" }}>
                {movie.vote_average}/10{" Rating"}
              </h4>

              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "5px" }}
              >
                Play
              </Button>
              <Button variant="outlined" color="primary">
                My List
              </Button>

              <p className="header_title">{truncate(movie?.overview, 100)}</p>
              {/* Title */}
              {/* Button */}
              {/* Descriotion */}
            </div>
            <div className="banner_fadebottom"></div>
          </div>
          {/* Header image */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Banner;
