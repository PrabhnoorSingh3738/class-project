const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    content: String,
    rating: Number,
    author: String,
    createdAt: String
  }, {
    timestamps: true
  })
  const reviewModel = mongoose.model("review" , reviewSchema);
