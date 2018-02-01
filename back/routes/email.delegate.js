var EmailDelegate = function ({emailService}) {
  this.emailService = emailService;
  this.sendEmail = sendEmail;
}

function sendEmail(email) {
  return this.emailService.sendEmail(email)
    .then(data => {      
      return Promise.resolve();
    })
    .catch(e => {
      return Promise.resolve();
    })
      ;
}



module.exports = EmailDelegate;