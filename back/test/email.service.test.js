const assert = require('assert');
const service = require('../domain/email/email.service');

/*
describe('email.service main test', function() {
  this.timeout(50000);

  let email = {
    sender: 'taewdy@gmail.com',
    recipients: 'taewdy@gmail.com',
    cc: '',
    bcc: '',
    subject: '[test]one sender/one receipients',
    contents: 'TESTING'
  };

  it('success when one recipient', () => {
    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });

  it('success when multi recipient', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.subject = '[test]one sender/multi recipient';

    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });

  it('success when multi recipient / cc', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.cc = 'test02@gmail.com,test03@gmail.com';
    email.subject = '[test]one sender/multi receipients / cc';

    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });

  it('success when multi recipient / cc / bcc', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.cc = 'test02@gmail.com,test03@gmail.com';
    email.bcc = 'test04@gmail.com,test05@gmail.com';
    email.subject = '[test]one sender/multi receipients / cc / bcc';

    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });

  it('success when multi recipient / cc / bcc', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.cc = 'test02@gmail.com,test03@gmail.com';
    email.bcc = 'test04@gmail.com,test05@gmail.com';
    email.subject = '[test]one sender/multi receipients / cc / bcc';

    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });
});

describe('email.service sendGrid test', function() {

  let env;
  let email = {
    sender: 'taewdy@gmail.com',
    recipients: 'taewdy@gmail.com',
    cc: '',
    bcc: '',
    subject: '[sendGrid test]one sender/one receipients',
    contents: 'TESTING'
  };

  this.timeout(50000);

  before(() => {
    env = process.env.MAILGUN_ID_PWD;
    process.env.MAILGUN_ID_PWD = 34567;    
  });

  after(() => {
    process.env.MAILGUN_ID_PWD = env;   
  });

  it('success when one recipient', () => {

    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });
  it('success when multi recipient', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.subject = '[sendGrid test]one sender/two receipients';

    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });

  it('success when multi recipient / cc', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.cc = 'test02@gmail.com,test03@gmail.com';
    email.subject = '[sendGrid test]one sender/multi receipients / cc';

    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });

  it('success when multi recipient / cc / bcc', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.cc = 'test02@gmail.com,test03@gmail.com';
    email.bcc = 'test04@gmail.com,test05@gmail.com';
    email.subject = '[sendGrid test]one sender/multi receipients / cc / bcc';

    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });

  it('success when multi recipient / cc / bcc', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.cc = 'test02@gmail.com,test03@gmail.com';
    email.bcc = 'test04@gmail.com,test05@gmail.com';
    email.subject = '[sendGrid test]one sender/multi receipients / cc / bcc';

    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);
    });
  });
});
*/
describe('email.service Mail GUN test', function() {
  let env;
  let email = {
    sender: 'taewdy@gmail.com',
    recipients: 'taewdy@gmail.com',
    cc: '',
    bcc: '',
    subject: '[mailgun test]one sender/one receipients',
    contents: 'TESTING'
  };

  this.timeout(50000);
  before(() => {
    env = process.env.SENDGRID_API_KEY;
    process.env.SENDGRID_API_KEY = 34567;
  });

  after(() => {
    process.env.SENDGRID_API_KEY = env;
  });

  it('success when one recipient', () => {
    return service.sendEmail(email).then(actual => {
      assert(actual.statusCode >= 200 && actual.statusCode <= 300);      
    });
  });

  it('fail when multi recipient', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.subject = '[mailgun test]one sender/two receipients';

    return service
      .sendEmail(email)
      .then(actual => {
        assert(false);
      })
      .catch(err => {
        assert(err.statusCode >= 300 || err.statusCode < 200);
      });
  });

  it('fail when multi recipient / cc', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.cc = 'test02@gmail.com,test03@gmail.com';
    email.subject = '[mailgun test]one sender/multi receipients / cc';

    return service
      .sendEmail(email)
      .then(actual => {
        assert(false);
      })
      .catch(err => {
        assert(err.statusCode >= 300 || err.statusCode < 200);
      });
  });

  it('fail when multi recipient / cc / bcc', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.cc = 'test02@gmail.com,test03@gmail.com';
    email.bcc = 'test04@gmail.com,test05@gmail.com';
    email.subject = '[mailgun test]one sender/multi receipients / cc / bcc';

    return service
      .sendEmail(email)
      .then(actual => {
        assert(false);
      })
      .catch(err => {
        assert(err.statusCode >= 300 || err.statusCode < 200);
      });
  });

  it('fail when multi recipient / cc / bcc', () => {
    email.recipients = 'taewdy@gmail.com,test01@gmail.com';
    email.cc = 'test02@gmail.com,test03@gmail.com';
    email.bcc = 'test04@gmail.com,test05@gmail.com';
    email.subject = '[mailgun test]one sender/multi receipients / cc / bcc';

    return service
      .sendEmail(email)
      .then(actual => {
        assert(false);
      })
      .catch(err => {
        assert(err.statusCode >= 300 || err.statusCode < 200);
      });
  });
});
