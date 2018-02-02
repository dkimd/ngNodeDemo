const querystring = require('querystring');

var mailgun = function (email) {
  console.log(email);
  var content = setMailContent(email);

  var mail = {
    body: content,
    header: setMailHeader(content)
  };
  
  return mail;
}

function setMailContent(email) {
  console.log("["+email.recipients+"]");
  console.log("["+email.cc+"]");
  var mailBody = {
    from: 'postmaster@sandbox0c5f5f70caac44ddad36143ff3bce35c.mailgun.org',     
    to: email.recipients,
    cc: email.recipients,
    //bcc: email.bcc,
    subject: email.subject,
    text: email.contents
  };
  console.log(mailBody);
  return querystring.stringify(mailBody);  
}

function setMailHeader(content) {
  const base64encodedData = new Buffer(process.env.MAILGUN_ID_PWD).toString('base64');  
  console.log("content[[[[[[[" + content + "]]]]]");
  const options = {
    hostname: 'api.mailgun.net',
    port: 443,    
    path: '/v3/sandbox0c5f5f70caac44ddad36143ff3bce35c.mailgun.org/messages',    
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + base64encodedData,
      'Content-Type': 'application/x-www-form-urlencoded',
      'content-length': Buffer.byteLength(content)    
    }    
  };
  console.log(options);
  return options;
}

// var setMail = function (email) {  
//   return setMailContent(email)
// }

// var setHeader = function () {  
//   return setMailHeader()
// }

module.exports = mailgun;

// module.exports = {
//   setMail: setMail,
//   setHeader: setHeader
// };