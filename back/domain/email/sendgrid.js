function setMailContent(email) {
  
  const cc = splitList(email.cc);
  const bcc = splitList(email.bcc);

  let mailBody = {
    personalizations: [{
        to: splitList(email.recipients),
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

  if (cc.length) {    
    mailBody.personalizations[0].cc = cc;
  }

  if (bcc.length) {    
    mailBody.personalizations[0].bcc = bcc;
  }  

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

function splitList(list) {
  let arr = [];  
  list.split(',').forEach(e=> { if (e)  arr.push({"email":e})}); 
  return arr;
}

const setMail = function (email) {  
  return setMailContent(email)
}

const setHeader = function () {  
  return setMailHeader()
}

module.exports = {
  setMail: setMail,
  setHeader: setHeader
};