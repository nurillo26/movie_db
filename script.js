'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    privat: false,
};


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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);