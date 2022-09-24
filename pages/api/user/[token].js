import nookies from 'nookies'
import * as jwt from 'jsonwebtoken'
import connectMongo from '../../../assets/utils/connectMongo'
import disconnectMongo from '../../../assets/utils/disconnectMongo'
import User from '../../../models/user'
let ObjectId = require('mongoose').Types.ObjectId
const jwtSceret = 'SECRET'

const handler = async (req, res) => {
  try {
    const { token } = req.query

    const jwtToken = jwt.verify(token, jwtSceret)

    await connectMongo()

    const user = await User.findOne({
      _id: new ObjectId(jwtToken.userId),
    })

    await disconnectMongo()

    res.send({
      user,
    })
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}

export default handler
