var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'Yahoo',
    auth: {
      user: 'thewallofkindness',
      pass: 'finalproject'
    }
  });

  module.exports = {
    sendMail: function(emailTo, emailFrom, emailSubject, emailBody){
      var mailOptions = {
        from: 'thewallofkindness@yahoo.com',
        to: emailTo,
        subject: emailSubject,
        text: `${emailBody} Please reach back out to me at ${emailFrom}`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  
    }
  };
