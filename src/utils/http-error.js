class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.config.url}`)
    this.name = 'HttpError';
    this.response = response;
  }
}

export default HttpError;