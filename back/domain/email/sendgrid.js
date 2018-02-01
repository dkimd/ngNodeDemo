function setMailContent(email) {
  const mailBody = {
    personalizations: [{
        to: [{
            email: email.recipients
        }],
        subject: email.subject
    }],
    from: {
      email: email.sender
    },
    content: [{
        type: "text/plain",
        value: email.contents
    }]
  };
  return JSON.stringify(mailBody);
}

function setMailHeader() {
  const options = {
    hostname: 'api.sendgrid.com',
    port: 443,    
    path: '/v3/mail/send',    
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + process.env.SENDGRID_API_KEY,
      'Content-Type': 'application/json'      
    }    
  };
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