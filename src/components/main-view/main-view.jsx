import React from 'react';
import axios from 'axios';

import LoginView from '../login-view/login-view';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

export default class MainView extends React.Component{

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null 
        };
    }

    componentDidMount(){
        axios.get ('http://localhost:8080/movies')
        .then(response => {
            this.setState({
                movies: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    /* When a movie is clicked this function is used and updates the state of the 'selectedMovie' propery to that movie */

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    /* When a user logs in successfully, this function updates the 'user' propery in state to that particular user */

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    render() {
        const {movies, selectedMovie} = this.state;
      console.log("movies",movies);  
        /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are passed as a propr to the LoginView */
        /* if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />; */
        
        //Before the movies have been loaded
        if(movies.length === 0) return <div className = "main-view" />;

            return (
                <div className = "main-view">
                    {/*If the state of 'selectedMovie' is not null, that selected movie will be returned otherwise, all *movies will be returned*/}
                    {selectedMovie
                    ? <MovieView movie = {selectedMovie} onBackClick = 
                    {newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>

                    : movies.map(movie => (
                        <MovieCard key = {movie._id} movie = {movie} onMovieClick = {(newSelectedMovie) => {this.setSelectedMovie(newSelectedMovie) }}/>
                    ))
                    }
                    </div>
                    );
                }
                }