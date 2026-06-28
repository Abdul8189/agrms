/**
 * Wraps an async Express route handler to automatically catch errors
 * and forward them to the global error handler via next().
 *
 * Usage: router.get('/path', asyncHandler(async (req, res) => { ... }));
 *
 * @param {Function} fn - Async route handler (req, res, next)
 * @returns {Function} Express middleware
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
