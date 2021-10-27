import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

const runValidations = (validations) => async (req, res, next) => {
  await Promise.all(validations.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const error = errors.array().shift();

  return next({
    httpCode: StatusCodes.BAD_REQUEST,
    code: error.msg,
    message: error,
  });
};

export default runValidations;
