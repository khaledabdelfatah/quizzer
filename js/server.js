 function server(){
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'quizzer2019@gmail.com',
    pass: 'quizzer2019support'
  }
});

var mailOptions = {
  from: 'quizzer2019@gmail.com',
  to: 'quizzer2019@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
}