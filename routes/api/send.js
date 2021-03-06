const express = require('express');
const mail = require('../../nodeMailer');
const router2 = new express.Router();

	router2.post('/info', function(req, res){
	  let newName = req.query.name;
	  res.send(newName);
  });

  router2.post('/mail', function(req, res){
    mail.sendMail(req.query.emailTo, req.query.emailFrom, req.query.emailSubject, req.query.emailBody);
    res.send('Email Sent');
  })

module.exports = router2;
