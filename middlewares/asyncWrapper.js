const asyncWrapper = (fn) => {
  return async (req, resizeBy, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
};

module.exports = asyncWrapper;
