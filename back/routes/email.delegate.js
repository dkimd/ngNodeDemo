var EmailDelegate = function ({emailService}) {
  this.emailService = emailService;
  this.sendEmail = sendEmail;
}

function sendEmail() {
  return this.emailService.sendEmail()
    .then(data => {
      console.log('hey im here');
      return Promise.resolve();
    })
    .catch(e => {
      return Promise.resolve();
    })
      ;
}



module.exports = EmailDelegate;