import Meetup from '../../../models/meetup'
import connectMongo from '../../../assets/utils/connectMongo'
import disconnectMongo from '../../../assets/utils/disconnectMongo'
let ObjectId = require('mongoose').Types.ObjectId

const secret = 'secret'

const handler = async (req, res) => {
  try {
    const { meetupId, name } = req.body

    await connectMongo()
    
    const deletedMeetup = await Meetup.deleteOne({
      $and: [{ _id: ObjectId(meetupId) }, {name: name}]
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
