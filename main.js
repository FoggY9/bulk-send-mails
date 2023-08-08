// importing modules
const nodemailer = require("nodemailer")
require("dotenv").config()
const {subject, content, mailList} = require("./info.json")


sendMail()
function sendMail(){

  //login in mail
  // you can get a fake smtp mail by https://ethereal.email/create
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env['MAIL'],
        pass: process.env['PASS']
    }
    });

    // sending mail
    const info = transporter.sendMail({
      from: process.env['USER'],
      to: mailList,
      subject: subject,
      text: content
    });

    // result
console.log("accepted: " + info.accepted)
console.log("declined: " + info.rejected);
}
