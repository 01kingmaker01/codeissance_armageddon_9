import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import nookies from 'nookies'
import User from '../../../models/user'
import connectMongo from '../../../assets/utils/connectMongo'
import disconnectMongo from '../../../assets/utils/disconnectMongo'

const jwtSceret = 'SECRET'

const handler = async (req, res) => {
  try {
    const { userId, userPassword } = req.body
    await connectMongo()
    //check if the user exits.

    const isUser = await User.find({
      $or: [{ email: userId }, { username: userId }],
    })

    if (isUser.length == 0) {
      throw new Error('No User Found!')
    }

    //bcrypt the password.
    const validPassword = await bcrypt.compare(userPassword, isUser[0].password)

    if (!validPassword) {
      throw new Error('Password is incorrect!')
    }

    // creating the jwt token and storing it in cookies.
    const token = jwt.sign({ userId: isUser[0]._id }, jwtSceret, {
      expiresIn: '7d',
    })

    // Setting the cookies.
    nookies.set({ res }, 'token', token, {
      httpOnly: true,
      domain: process.env.SERVER_DOMAIN || undefined,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: true,
      path: '/',
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
