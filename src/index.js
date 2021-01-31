let nodemailer = require("nodemailer"),
  allQuotes = require("./quotes.json");
require("dotenv").config();

function randomizer() {
  let random = Math.floor(Math.random() * 40) + 1;
  return `"${allQuotes[random].text}" - ${allQuotes[random].from}`;
}

function sendEmail(emailAddress) {
  let transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVER,
    auth: {
      user: process.env.SMTP_LOGIN,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.SMTP_LOGIN,
    to: emailAddress,
    subject: "Inspiration Quote",
    text: randomizer(),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      return console.log("Email sent: " + info.response);
    }
  });
}
module.exports = { sendEmail, randomizer };
