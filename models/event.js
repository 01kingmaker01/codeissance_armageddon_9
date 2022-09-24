const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  name: String,
  organiser: [String],
  description: String,
  type: String,
  amount: String,
  mode: String,
  date: String,
  place: String,
  time: String,
  attendeeLimit: Number,
  registrationCount: Number,
  capacity: String,
  attendee: [String],
  tags: [String],
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
