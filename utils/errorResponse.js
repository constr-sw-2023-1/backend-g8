class ErrorResponse extends Error {
  constructor(errorCode, message, statusCode) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errorSource = "API";
  }
}

module.exports = ErrorResponse;
