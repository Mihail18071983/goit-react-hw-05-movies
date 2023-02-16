import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: 'ac91775ba29254b7e75060011bf34a90',
  },
});

export const fetchTrending = async (page) => {
  const mediaType = 'movie';
  const timeWindow = 'week';
  const { data } = await instance.get(
    `/trending/${mediaType}/${timeWindow}?page=${page}`
  );
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

export const fetchMovieById = async (movieID) => {
  const { data } = await instance.get(`/movie/${movieID}`);
  return data;
};

export const fetchCredits = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};

export const fetchReviews = async (movieID) => {
  const { data } = await instance.get(`/movie/${movieID}/reviews`);
  return data;
};
