class Errorhandler extends Error {
  constructor(statusCode, message) {
    console.log(statusCode, "handle_error status code");
    super(message);
    this.statusCode = statusCode;
  }
}

export default Errorhandler;
