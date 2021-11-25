/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../styles/components/FeaturedMovie.css';

import fav from '../assets/favoritar.svg'
import play from '../assets/play.svg'

const FeaturedMovie = ({ item }) => {
    let firstDate = new Date(item.start_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.description;
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(/assets/${item.cover_file})`
        }}>
            {<div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.evaluationMedia}% relevante</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.seasonsCount} temporada{item.seasonsCount !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton"> <img src={play} alt="play" /> Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton"> <img src={fav} alt="fav" /> Favoritar</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>}
        </section>
    );
}

export default FeaturedMovie;