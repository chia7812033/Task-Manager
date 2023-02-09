const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      error.status = 500
      next(error)
    }
  }
}

module.exports = asyncWrapper
