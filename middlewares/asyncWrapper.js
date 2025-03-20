const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      next(e); // error goes to built in handler cause we dont have a handler yet
    }
  };
};

module.exports = asyncWrapper;
