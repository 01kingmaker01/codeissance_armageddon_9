import connectMongo from '../../../assets/utils/connectMongo'
import disconnectMongo from '../../../assets/utils/disconnectMongo'
import Community from "../../../models/community"

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO')
    await connectMongo()
    console.log('CONNECTED TO MONGO')

    console.log('CREATING DOCUMENT')
    const community = await Community.create(req.body)
    console.log('CREATED DOCUMENT')

    console.log('DISCONNECTING MONGODB')
    await disconnectMongo()
    console.log('DISCONNECTED MONGODB')

    res.json({ community })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}
