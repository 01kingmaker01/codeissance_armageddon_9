import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth2'
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
import { User } from '../models/user'
const jwtSceret = 'SECRET'

//passport logic
passport.use(
  'google',
  new GoogleStrategy(
    {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackUrl: 'http://localhost:3000/api/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
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
            username: profile.username,
            password: bycrptedPassword,
          })

          // creating the jwt token and storing it in cookies.
          const token = await jwt.sign({ userId: user[0]._id }, jwtSceret, {
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
      } catch (error) {
        console.error(error.message)
        done(error, false, { message: 'Internal Error!' })
      }
    },
  ),
)
