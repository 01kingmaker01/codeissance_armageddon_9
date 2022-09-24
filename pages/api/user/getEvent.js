import mongoose from "mongoose"
let ObjectId = require('mongoose').Types.ObjectId
import connectMongo from "../../../assets/utils/connectMongo"
import disconnectMongo from "../../../assets/utils/disconnectMongo"
import Event from "../../../models/event"
import User from "../../../models/user"
import Community from "../../../models/community"
import eventType from "../../../models/eventType"
import INTERESTS from "../../../models/tag"

const handler = async (req, res) => {
    try {
      const { eid } = req.query
      await connectMongo()
      
      const doc = await Event.findOne(
        { _id : new ObjectId(eid)}
      )
      // replace organiser id with name
      for (let i in doc.organiser) {
        const u = await User.findOne({_id: new ObjectId(doc.organiser[i])})
        doc.organiser[i] = u.name
      }

      // community
      const c = await Community.findOne({_id: new ObjectId(doc.community)})
      doc.community = c.name

      // type
      const t = eventType[doc.type]
      doc["type"] = t
      
      // attendee
      for (let i in doc.attendee) {
        const a = await User.findOne({_id: new ObjectId(doc.attendee[i])})
        doc.attendee[i] = a.name
      }

      // tag
      for (let i in doc.tag) {
        const int = INTERESTS[doc.tag[i]]
        doc.tag[i] = int
      }

      await disconnectMongo()

      res.json(doc)
    } catch (error) {
      res.status(500).send({
        error: error.message,
      })
    }
}

export default handler
