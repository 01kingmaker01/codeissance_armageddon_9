import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth2'
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
import connectMongo from '../assets/utils/connectMongo'
import disconnect from '../assets/utils/disconnectMongo'
import User from '../models/user'
const jwtSceret = 'SECRET'

//passport logic
passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // console.log(profile._json)
        await connectMongo()

        const isUser = await User.find({
          emailId: profile.email,
        })

        if (isUser.length == 0) {
          //create new user acount.
          const password = profile.email
          // hashing the password.
          const bycrptedPassword = await bcrypt.hash(password, 10)

          const user = await User.create({
            emailId: profile.email,
            username: profile._json.name,
            password: bycrptedPassword,
          })

          // creating the jwt token and storing it in cookies.
          const token = await jwt.sign({ userId: user._id }, jwtSceret, {
            expiresIn: '7d',
          })
          done(null, user[0], { message: 'Auth sucessed!', token })
        } else {
          //Login using the existing user.
          const token = await jwt.sign({ userId: isUser[0]._id }, jwtSceret, {
            expiresIn: '7d',
          })

          done(null, isUser[0], { message: 'Auth sucessed!', token })
        }

        await disconnect()
      } catch (error) {
        console.error(error.message)
        done(error, false, { message: 'Internal Error!' })
      }
    },
  ),
)
