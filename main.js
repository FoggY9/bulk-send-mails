// importing modules
const {readFileSync} = require("fs")
const readline = require("readline-sync")
const nodemailer = require("nodemailer")
require("dotenv").config()


sendMail()
async function sendMail(){

let addresses = readAddresses();
let text = readinput()

  //login in mail
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env['MAIL'],
        pass: process.env['PASS']
    }
    });

    const info = await transporter.sendMail({
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