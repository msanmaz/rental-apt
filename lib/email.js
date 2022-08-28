import nodemailer from 'nodemailer'

export default function sendEmail(to, subject, body) {
  const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER)

  transporter.sendMail(
    {
      from: process.env.EMAIL_FROM,
      to: to,
      subject: subject,
      html: body,
    },
    function (err, info) {
      if (err) {
        console.log(err)
      } else {
        //ok
        console.log('email sent')
      }
    }
  )
}