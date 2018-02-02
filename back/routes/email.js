var express = require('express');
var router = express.Router();

var EmailDelegate = require('./email.delegate');
var emailService = require('../domain/email/email.service');

var delegate = new EmailDelegate({emailService});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('GET /email reached');
});

router.post('/', _sendEmail);

function _sendEmail(req, res) {
  
  delegate.sendEmail(req.body)
    .then(response => {
      // console.log(response);
      res.json(response);
    })
}

module.exports = router;