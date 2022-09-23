import mongoose from "mongoose"
let ObjectId = require('mongoose').Types.ObjectId
import connectMongo from "../../../assets/utils/connectMongo"
import disconnectMongo from "../../../assets/utils/disconnectMongo"
import Event from "../../../models/event"

const handler = async (req, res) => {
    try {
      const { eid } = req.query
      await connectMongo()
      
      const doc = await Event.find(
        { _id : new ObjectId(eid)}
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
