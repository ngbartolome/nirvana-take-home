import { query } from 'express-validator';

import CRITERIA_TYPES from '../../../models/enums/criteriaTypes';

import locales from '../../../locales/en.json';

const { CRITERIA_NOT_VALID } = locales;

const validateCriteria = query('criteria')
  .exists()
  .isIn(Object.values(CRITERIA_TYPES))
  .withMessage(CRITERIA_NOT_VALID)
  .custom((criteria, { req }) => {
    req.criteria = criteria;
    return Promise.resolve();
  });

export default validateCriteria;
