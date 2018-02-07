const assert = require('assert');
const Delegate = require('../routes/email.delegate');

describe('email.delegate testing resolve/reject behavior ', () => {
  const mockService = {
    sendEmail: function(flag) {
      if (flag) {
        return Promise.resolve();
      } else {
        return Promise.reject('failed');
      }
      
    }    
  };

  const delegate = new Delegate({emailService: mockService});

  it('should return success', () => {
    return delegate.sendEmail(1)
      .then(response => {
        assert.equal(response.success, true)
      })
  });

  it('should return false', () => {
    return delegate.sendEmail(0)
      .then(response => {
        assert.equal(response.success, false)
      })
  });
})