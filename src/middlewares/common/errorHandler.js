const errorHandler = (error, req, res, next) => {
  res.status(error.httpCode).send({
    errorCode: error.code,
    message: error.message,
  });
  return next();
};

export default errorHandler;
