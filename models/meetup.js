// import { Schema, model } from 'mongoose'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const meetupSchema = new Schema({
  name: String,
  organiser: [String],
  community: String,
  description: String,
  date: Date,
  place: String,
  time: String,
  attendeeLimit: Number,
  attendee: [String],
  tag: [Number],
  regLink: String,
  social: {
    website: String,
    telegram: String,
    twitter: String,
    instagram: String,
    linkedin: String
  }
})

module.exports = mongoose.models.Meetup || mongoose.model('Meetup', meetupSchema)
