// import { Schema, model } from 'mongoose'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const userSchema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  contactNo: Number,
  dob: Date,
  location: String,
  postion: String,
  organisation: String,
  posts: [String],
  interests: [String],
  attended: [String],
  organised: [String],
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema)
