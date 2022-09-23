const mongoose = require('mongoose')
const Schema = mongoose.Schema

const communitySchema = new Schema({
  name: String,
  organiser: [String],
  description: String,
  tag: [Number],
  social: {
    website: String,
    telegram: String,
    twitter: String,
    instagram: String,
    linkedin: String
  }
})

module.exports = mongoose.models.Community || mongoose.model('Community', communitySchema)