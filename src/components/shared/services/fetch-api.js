import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: 'ac91775ba29254b7e75060011bf34a90',
  },
});

export const fetchTrending = async (page=1) => {
  const mediaType = 'movie';
  const timeWindow = 'week';
  const { data } = await instance.get(`/trending/${mediaType}/${timeWindow}?page=${page}`);
  return data;
};

export const fechMovie = async (page = 1, query = 'titanic') => {
  const { data } = await instance.get(`/search/movie/`, {
    params: {
      page,
      query,
    },
  });
  console.log('movie', data.results);
  return data.results;
};

export const fetchGenres = async () => {
  const { data } = await instance.get(`/genre/movie/list`);
  console.log('genres', data.genres);
  return data.genres;
};

export const fetchMovieById = async (movieID = 322) => {
  const { data } = await instance.get(`/movie/${movieID}`);
  console.log('movieDetails', data);
  return data;
};

export const fetchCredits = async (movieId = 322) => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  console.log('credits', data);
  return data;
};

export const fetchReviews = async (movieID = 322) => {
  const { data } = await instance.get(`/movie/${movieID}/reviews`);
  console.log('reviews', data.results);
  return data.results;
};



