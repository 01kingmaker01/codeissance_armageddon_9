import { Schema, model } from 'mongoose'

const testSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
})

export const Test = model('Test', testSchema)
