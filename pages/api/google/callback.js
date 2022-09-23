import passport from 'passport'
import '../../../lib/passport'
import nookies from 'nookies'

export default async function (req, res, next) {
  passport.authenticate('google', (err, user, info) => {
    if (err || !user) {
      return res.redirect(`http://localhost:3000/?a=auth_fail`)
    }

    //set the cookies.
    // set the token in cookies.
    nookies.set({ res }, 'token', info.token, {
      httpOnly: true,
      domain: process.env.SERVER_DOMAIN || undefined,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: true,
      path: '/',
    })

    res.redirect(`http://localhost:3000/dashboard`)
  })(req, res, next)
}
