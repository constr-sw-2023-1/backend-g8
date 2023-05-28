const stackExternalErrors = (req, res, next) => {
  if (res.locals.externalError) {
    errorStack.push(...res.locals.externalError);
  }
  next();
};

module.exports = stackExternalErrors;
