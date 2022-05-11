import React from 'react';

export default class MovieView extends React.Component {

    render() {
        const {movie} = this.props;

        return (
            <div className = "movie_view">
            <div className = "movie-poster">
            <img src = {movie.ImagePath} />
            </div>

            <div className = "movie-title">
            <span className = "label"> Title: Ponyo </span>
            <span className = "value"> {movie.Title} </span>
            </div>

            <div className = "movie-description">
            <span className = "label"> Description: A fish becomes a little girl and falls in love. </span>
            <span className = "value"> {movie.Description} </span>
            </div>
            </div>
        );
    }
}