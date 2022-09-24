import Event from '../../../models/event'
import connectMongo from '../../../assets/utils/connectMongo'
import disconnectMongo from '../../../assets/utils/disconnectMongo'
let ObjectId = require('mongoose').Types.ObjectId

const secret = 'secret'

const handler = async (req, res) => {
  try {
    const { eventId, name } = req.body

    await connectMongo()
    
    const deletedEvent = await Event.deleteOne({
      $and: [{ _id: ObjectId(eventId) }, {name: name}]
    })

    await disconnectMongo()

    res.status(200).send({
      message: 'done',  
    })
  } catch (error) {
    res.status(500).send({
      error: error.message,
    })
  }
}

export default handler
