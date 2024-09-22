import axios from "axios";

const baseurl = import.meta.env.VITE_BASEURL;
const apikey = import.meta.env.VITE_APIKEY;

export const get = async () => {
  const movies = await axios.get(
    `${baseurl}movie/popular?page=1&api_key=${apikey}`
  );

  return movies.data.results;
};

export const search = async (request) => {
  const movies = await axios.get(
    `${baseurl}search/movie?query=${request}&page=1&api_key=${apikey}`
  );

  return movies.data;
};
