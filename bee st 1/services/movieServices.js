const mongoose = require('mongoose')
const movieSchema = require('../model/movieSchema')

exports.findByGenre = async(genre)=>{
    return await movieSchema.findOne({'genre':genre}).select('_id')
}

exports.addMovie = async(data)=>{
    return await movieSchema.create(data)
}