import React, { useEffect, useState } from "react";
import { getHomeList, getMovieInfo } from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header"

import "./App.css"
import { IMG_LOADING } from "./utils/network_address";

// eslint-disable-next-line
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);
      setFeaturedData(true);
      const originals = list.filter(i => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 30) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header isBlack={blackHeader} />
      {
        featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="list">
        {
          movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))
        }
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤️</span> pela B7Web<br />
        Direitos de imagem para Netflix<br />
        Dados pegos do site themoviedb.org
      </footer>

      {
        movieList.length <= 0 &&
        < div className="loading">
          <img alt="Carregando" src={IMG_LOADING} />
        </div>
      }
    </div >
  );
}