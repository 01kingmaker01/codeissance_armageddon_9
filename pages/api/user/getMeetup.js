import mongoose from "mongoose"
let ObjectId = require('mongoose').Types.ObjectId
import connectMongo from "../../../assets/utils/connectMongo"
import disconnectMongo from "../../../assets/utils/disconnectMongo"
import Meetup from "../../../models/meetup"

const handler = async (req, res) => {
    try {
      const { mid } = req.query
      await connectMongo()
      
      const doc = await Meetup.find(
        { _id : new ObjectId(mid)}
      )
      await disconnectMongo()

      res.json(doc)
    } catch (error) {
      res.status(500).send({
        error: error.message,
      })
    }
}

export default handler
