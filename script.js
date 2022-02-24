import fetch from "node-fetch";
import nodemailer from "nodemailer";

let res = await fetch("https://api.kanye.rest/");
let result = await res.json();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gaming.crosti.ro@gmail.com",
    pass: "alvincris2002",
  },
});

const mailOptions = {
  from: "gaming.crosti.ro@gmail.com",
  to: "r.perial@jacobs-university.de",
  subject: "Your daily dose of Kanye West quotes <3",
  text: result.quote,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent" + info.response);
  }
});
