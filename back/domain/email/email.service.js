var https = require('https');
var sgMail = require('./sendgrid');
var mgMail = require('./mailgun');

var emailService = {
  sendEmail: sendEmail
};

function sendEmail(email) {

  const makeRequest = async () => {

    var result;
        
    try {
      // due to free account limitation, this will always fail
      // when multiple recipients and goes to next mail sender
      
      result = await request(mgMail.setHeader(), mgMail.setMail(email));      
    } catch (e) {
      result = await request(sgMail.setHeader(), sgMail.setMail(email));      
    }

    return result;
  }

  return makeRequest();

}

function request(params, postData) {
  return new Promise(function(resolve, reject) {
      var req = https.request(params, function(res) {
          console.log(res.statusCode + " : " + res.statusMessage + " @" + params.hostname);
          var result = {
            "statusCode": res.statusCode,
            "provider": params.hostname
          }
          // reject on bad status          
          if (res.statusCode < 200 || res.statusCode >= 300) {
              return reject(result);
          } else {
            resolve(result)
          }
      });
      // reject on request error
      req.on('error', function(err) {          
          reject(err);
      });
      if (postData) {          
          req.write(postData);
      }      
      req.end();
  });
}

module.exports = emailService;
