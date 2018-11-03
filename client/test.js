
npm install nodemailer in both backend and front end folders

///// in landing page or search page/////////////

  clearEmailForm(){
    document.getElementById('emailFrom').value = '';
    document.getElementById('emailSubject').value = '';
    document.getElementById('emailBody').value = '';
    }

  

  sendEmail(e){
    e.preventDefault();
    
   
    // set route to send through the email
    axios({
      method: 'post',
      url: 'send/mail',
      params: {
        emailTo: results.email,
        emailFrom: document.getElementById('emailFrom').value,
        emailSubject: document.getElementById('emailSubject').value,
        emailBody: document.getElementById('emailBody').value
      }
    }).then((response) => {
      console.log(response);
    })
    this.clearEmailForm();
    this.emailSentMessage();
  }

  emailSentMessage(){
    let toast = document.getElementById('toast');
    toast.classList.remove('invisible');
    setTimeout(function(){toast.classList.add('invisible')}, 2000);
  }

  

  //////////// in controllers make a file named by nodeMailer.js //////////////
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '???@gmail.com',
      pass: '???'
    }
  });
  
  
  module.exports = {
    sendMail: function(emailTo, emailFrom, emailSubject, emailBody){
      var mailOptions = {
        from: '???@gmail.com',
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

  
  ////////////////////////////

  /////////in routes folder make a file named by send.js//////////

  const express = require('express');
const mail = require('../controllers/nodeMailer');
const router2 = new express.Router();

	router2.post('/info', function(req, res){
	  let newName = req.query.name;
	  res.send(newName);
  });

  router2.post('/mail', function(req, res){
    console.log(req.query);
    mail.sendMail(req.query.emailTo, req.query.emailFrom, req.query.emailSubject, req.query.emailBody);
    res.send('Email Sent');
  })

module.exports = router2;




