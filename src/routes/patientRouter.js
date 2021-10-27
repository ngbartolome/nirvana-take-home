import express from 'express';

import runValidations from '../middlewares/common/validations/runValidations';

import {
  validateCriteria,
  validateMemberId,
} from '../middlewares/patient/validations';
import getPatient from '../middlewares/patient/getPatient';

const patientRouter = express.Router();

patientRouter.get(
  '/',
  runValidations([validateCriteria, validateMemberId]),
  getPatient,
);

export default patientRouter;
