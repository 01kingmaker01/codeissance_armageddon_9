const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  name: String,
  organiser: [String],
  description: String,
  type: String,
  price: Number,
  mode: String,
  date: Date,
  place: String,
  time: String,
  attendeeLimit: Number,
  registrationCount: Number,
  attendee: [String],
  tag: [String],
  regLink: String,
  social: {
    website: String,
    telegram: String,
    twitter: String,
    instagram: String,
    linkedin: String,
  },
})

module.exports = mongoose.models.Event || mongoose.model('Event', eventSchema)
