var ResMessage = function (success, error, data) {
  this.success = success;
  this.error = success ? null : error || 'please consult staff.';
  this.data = data;
  this.setError = setError;
  this.setSuccess = setSuccess;
}

function setError(error) {
  this.success = false;
  this.error = error;
  this.data = null;
}

function setSuccess(data) {
  this.success = true;
  this.error = null;
  this.data = data;
}

module.exports = ResMessage;

