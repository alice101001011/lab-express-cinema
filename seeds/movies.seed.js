const movies = require("../data/movies");
const Movie = require("../models/Movie.model");

require("../db");

const movieSeed = async () => {
  try {
    await Movie.create(movies);
    console.log(`${movies.length} movies seeded`);
  } catch (error) {
    console.log(error);
  }
};

movieSeed();
