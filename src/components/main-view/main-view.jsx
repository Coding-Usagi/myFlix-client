import React from 'react';

import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

export default class MainView extends React.Component{

    constructor() {
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Demon Slayer Mugen Train', Description: 'tba', ImagePath: '...'},
                { _id: 2, Title: 'Ponyo', Description: 'tba2', ImagePath: '...'},
                { _id: 3, Title: 'Howls Moving Castle', Description: 'tba3', ImagePath: '...'}
            ],
            selectedMovie: null 
        }
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const movies = this.state.movies;
        
        if(movies.length === 0)
            return <div className = "main-view"> The list is empty! </div>

            return (
                <div className = "main-view">
                    {selectedMovie
                    ? <MovieView movie = {selectedMovie} onBackClick = 
                    {newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>

                    : movies.map(movie => (
                        <MovieCard key = {movie._id} movie = { movie} onMovieClick = 
                        {(movie) => {this.setSelectedMovie (movie)}}/>
                    ))
                    }
                    </div>
                    );
                }
                }