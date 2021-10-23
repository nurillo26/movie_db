'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    privat: false,
};

const lastMovie1 = prompt('Один из последних просмотренных фильмов?');
const movieRating1 = prompt('На сколько его оцените?');
const lastMovie2 = prompt('Один из последних просмотренных фильмов?');
const movieRating2 = prompt('На сколько его оцените?');

personalMovieDB.movies[lastMovie1] = movieRating1;
personalMovieDB.movies[lastMovie2] = movieRating2;


console.log(personalMovieDB);