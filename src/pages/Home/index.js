/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';

import MovieRow from "../../components/MovieRow"
import FeaturedList from "../../components/FeaturedList"
import Footer from "../../components/Footer"
import FeaturedMovie from "../../components/FeaturedMovie";
import Header from "../../components/Header";
import api from "../../services/api"
import { listItems } from "../../utils/pagination";
import loading from "../../assets/loading.gif"

import "../../styles/pages/home.css";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    const loadAll = async () => {
      const responsedata = await api.get('animes');
      const [jsonAnime] = responsedata.data;

      const listAnimes = [{
        slug: 'highlights',
        title: 'Destaques',
        items: { results: listItems(responsedata.data, 1, 15) }
      }]

      setMovieList(listAnimes);
      setFeaturedData(jsonAnime);
      console.log(jsonAnime);
    }

    loadAll();

  }, []);

  useEffect(() => {
    const scroolListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scroolListener);
    return () => {
      window.removeEventListener('scroll', scroolListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      <div className="mainFeatured">
        {featuredData &&
          <FeaturedMovie item={featuredData} />
        }
        {movieList.map((item) => (
          <FeaturedList items={item.items} />
        ))}
      </div>



      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />

      {movieList.length <= 0 &&
        <div className="loading">
          <img src={loading} alt="Carregando" />
        </div>
      }
    </div>
  );
}

export default Home;