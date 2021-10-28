'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie1 = prompt('Один из последних просмотренных фильмов?');
        const movieRating1 = prompt('На сколько его оцените?');
    
        if (lastMovie1 != null && movieRating1 != null && lastMovie1 != '' && movieRating1 != '' && lastMovie1.length < 50) {
            personalMovieDB.movies[lastMovie1] = movieRating1;
            console.log('done')
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if ( !hidden ) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }

}

writeYourGenres();