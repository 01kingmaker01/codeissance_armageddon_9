import mongoose from "mongoose"
let ObjectId = require('mongoose').Types.ObjectId
import connectMongo from "../../../assets/utils/connectMongo"
import disconnectMongo from "../../../assets/utils/disconnectMongo"
import User from "../../../models/user"


const handler = async (req, res) => {
    try {
      const { uid } = req.query
      await connectMongo()
      
      const doc = await User.find(
        { _id : new ObjectId(uid)}
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
