/**
 * Standardized API success response.
 * All successful API responses use this format.
 */
class ApiResponse {
  /**
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Success message
   * @param {*} data - Response payload
   */
  constructor(statusCode, message, data = null) {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
  }

  /**
   * Send response via Express res object
   * @param {import('express').Response} res
   */
  send(res) {
    return res.status(this.statusCode).json({
      success: this.success,
      statusCode: this.statusCode,
      message: this.message,
      data: this.data,
    });
  }

  static ok(res, message, data) {
    return new ApiResponse(200, message, data).send(res);
  }

  static created(res, message, data) {
    return new ApiResponse(201, message, data).send(res);
  }

  static noContent(res, message = 'Success') {
    return res.status(204).json({
      success: true,
      statusCode: 204,
      message,
      data: null,
    });
  }
}

module.exports = ApiResponse;
