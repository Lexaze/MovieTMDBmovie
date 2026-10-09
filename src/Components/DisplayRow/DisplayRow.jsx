import React, { useEffect, useState } from "react";
import SlideShow from "../SlideShow/SlideShow";
import styles from "./DisplayRow.module.css";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/MovieRequestingUrl";

// This functional component display rows of movies

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netfOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netfOriginalsRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchFeaturedOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries),
      ]);
      setMovies({
        trending: trendingRes.data.results,
        netfOriginals: netfOriginalsRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Trending" movies={movies.trending} />
      <SlideShow title="Popular on StreamHub" movies={movies.netfOriginals} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
      <SlideShow title="Action" movies={movies.action} />
      <SlideShow title="Comedy" movies={movies.comedy} />
      <SlideShow title="Horror" movies={movies.horror} />
      <SlideShow title="Romance" movies={movies.romance} />
      <SlideShow title="Documentaries" movies={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;
