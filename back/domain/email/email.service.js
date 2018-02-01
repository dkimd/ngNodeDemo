var https = require('https');
const querystring = require('querystring');
var sgMail = require('./sendgrid');
var mgMail = require('./mailgun');

//var sgMail = require('@sendgrid/mail');

var emailService = {
  sendEmail: sendEmail
};

function sendEmail(email) {
  
  var mail = sgMail.setMail(email);
  var option = sgMail.setHeader();
  
  request(mail, option);
  var mail01 = mgMail.setMail(email);
  var option01 = mgMail.setHeader();
  request(mail01, option01);
}

function request(mail, options) {

  const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
  
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });
  
  req.on('error', (e) => {
    console.error(e);
  });
  
  req.write(mail);
  req.end();

}

module.exports = emailService;
