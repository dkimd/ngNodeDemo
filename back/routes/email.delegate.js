var EmailDelegate = function ({emailService}) {
  this.emailService = emailService;
  this.sendEmail = sendEmail;
}

function sendEmail(email) {
  return this.emailService.sendEmail(email)
    .then(data => {      
      return data;
    })
    .catch(e => {
      console.log(e);
    })
      ;
}

module.exports = EmailDelegate;