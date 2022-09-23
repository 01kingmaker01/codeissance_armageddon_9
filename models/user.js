// import { Schema, model } from 'mongoose'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  _uid: String,
  username: String,
  name: String,
  emailId: String,
  password: String,
  contactNo: Number,
  dob: Date,
  location: String,
  postion: String,
  organisation: String,
  interests: [String],
  attended: [String],
  organised: [String],
})

export const User = mongoose.model('User', userSchema)
