var emailService = {
  sendEmail : sendEmail
} 

function sendEmail() {
  console.log('email service reached');
  return Promise.resolve('ok');
}

module.exports = emailService;