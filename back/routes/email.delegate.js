const ResMessage = require('../util/ResMessage');

const EmailDelegate = function ({emailService}) {
  this.emailService = emailService;
  this.sendEmail = sendEmail;
}

function sendEmail(email) {
  return this.emailService.sendEmail(email)
    .then(data => {      
      return Promise.resolve(new ResMessage(true, null, data));
    })
    .catch(e => {
      return Promise.resolve(new ResMessage(false, e.message, null))
    })
      ;
}

module.exports = EmailDelegate;