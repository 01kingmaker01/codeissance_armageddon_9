import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import nookies from 'nookies'
import User from '../../../models/user'
import connectMongo from '../../../assets/utils/connectMongo'
import disconnectMongo from '../../../assets/utils/disconnectMongo'

const secret = 'SECRET'
//Sign up handler.
const handler = async (req, res) => {
  try {
    const { userEmail, userUsername, userPassword } = req.body

    //Connectiong to the mongodb collections.

    await connectMongo()

    //check if the user is present or not.
    const isUserEmail = await User.find({
      emailId: userEmail,
    })

    const isUserUserName = await User.find({
      username: userUsername,
    })

    if (isUserEmail.length > 0) {
      throw new Error('User Email exits!')
    }

    if (isUserUserName.length > 0) {
      throw new Error('Username already exists!')
    }

    //Hashing the password.
    const bycrptedPassword = await bcrypt.hash(userPassword, 10)
    //Creating a new user.
    const user = await User.create({
      emailId: userEmail,
      password: bycrptedPassword,
      username: userUsername,
    })

    //creating the jwt token and storing it in cookies.
    const token = jwt.sign({ userId: user._id }, secret, {
      expiresIn: '7d',
    })

    //setting the cookies.
    nookies.set({ res }, 'token', token, {
      httpOnly: true,
      domain: process.env.SERVER_DOMAIN || undefined,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: true,
      path: '/',
    })

    //Disconnecting the mongodb.
    await disconnectMongo()

    //sending the response.
    res.status(200).send({
      message: 'User created',
    })
  } catch (error) {
    res.status(500).send({
      error: error.message,
    })
  }
}

export default handler
