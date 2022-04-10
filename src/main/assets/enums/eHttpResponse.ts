enum eHttpResponse {
  Ok = 200,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  Conflict = 409,
  Gone = 410,
  TooManyRequests = 429,
  InternalServerError = 500
}

export default eHttpResponse;
