import React, { useEffect, useState } from "react";
import {getHomeList} from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

import "./App.css"

// eslint-disable-next-line
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);
      setFeaturedData(true);
      const originals = list.filter(i => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      const chosen = originals[0].items.results[randomChosen];
      console.log(randomChosen);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      {/* {
        featuredData &&
        <FeaturedMovie item={featuredData}/>
      } */}
      <section className="list">
        {
          movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))
        }
      </section>
    </div>
  );
}