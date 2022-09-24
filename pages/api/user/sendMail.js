const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'anuragbapat1006@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
      }
    })

    const mailOptions = {
      from: 'anuragbapat1006@gmail.com',
      to: 'sameepsawant10@gmail.com',
      subject: 'Successful!',
      text: 'Finally sent a mail with Node'
    }

    const result = await transport.sendMail(mailOptions)
    // res.json(result)
    return result

  } catch(error) {
    return error
  }
}

const handler = async (req, res) => {
  try{
    sendMail().then(result => console.log(result)).catch(error => console.log(error.message))
    res.json({"status": "sent"})
  } catch(error) {
    res.json(error)
  }
}

export default handler