import fetch from "node-fetch";
import nodemailer from "nodemailer";

let res = await fetch("https://api.kanye.rest/");
let result = await res.json();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: " ",
    pass: " ",
  },
});

const mailOptions = {
  from: " ",
  to: " ",
  subject: "Your daily dose of quotes",
  text: result.quote,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent" + info.response);
  }
});
