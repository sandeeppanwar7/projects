//import ExtendableError from 'es6-error';

class NetworkError extends Error {
  constructor(message, status, json = {}) {
    super(message);
    this.status = status;
    this.response = json;
  }
}

export default NetworkError;
