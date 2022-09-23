import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  _uid: String,
  username: String,
  name: String,
  emailId: String,
  contactNo: Number,
  age: Number,
  location: String,
  postion: String,
  organisation: String,
  interests: [String],
  attended: [String],
  organised: [String]
})

export const User = model('User', userSchema)