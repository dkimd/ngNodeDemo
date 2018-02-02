const querystring = require('querystring');

function setMailContent(email) {
  const mailBody = {
    from: "Mailgun Sandbox <postmaster@sandbox0c5f5f70caac44ddad36143ff3bce35c.mailgun.org>", 
    to: email.recipients,
    subject: email.subject,
    text: email.contents
  };
  return querystring.stringify(mailBody);
}

function setMailHeader() {
  const base64encodedData = new Buffer(process.env.MAILGUN_ID_PWD).toString('base64');  

  const options = {
    hostname: 'api.mailgun.net',
    port: 443,    
    path: '/v3/sandbox0c5f5f70caac44ddad36143ff3bce35c.mailgun.org/messages',    
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + base64encodedData,
      'Content-Type': 'application/x-www-form-urlencoded'    
    }    
  };
  console.log(options);
  return options;
}

var setMail = function (email) {  
  return setMailContent(email)
}

var setHeader = function () {  
  return setMailHeader()
}

module.exports = {
  setMail: setMail,
  setHeader: setHeader
};