// importing modules
const {readFileSync} = require("fs")
const readline = require("readline-sync")
const nodemailer = require("nodemailer")
require("dotenv").config()


sendMail()
function sendMail(){

let addresses = readAddresses();
let text = readinput()

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

    const info = transporter.sendMail({
      from: process.env['USER'],
      to: addresses,
      subject: 'Nodemailer Project',
      text: text
    });

console.log("accepted: " + info.accepted)
console.log("declined: " + info.rejected);
}
function readAddresses() {

    let buffer = readFileSync("adresses.txt");
    let string = buffer.toString();
    return string.split("\n");
}
function readinput() {

  readline.question('What is your Message? ', (input) => {
    return input
});

}