const mongoose = require('mongoose')
// const reviewSchema = require('./reviewSchema')

const movieSchema = mongoose.Schema({
    movieId: Number,
    title: String,
    description: String,
    genre: String,
    releaseYear: Number,
    // reviews: 
  })

module.exports = mongoose.model("movieSchema", movieSchema)
