import { query } from 'express-validator';

import locales from '../../../locales/en.json';

const { MEMBER_ID_NOT_VALID } = locales;

const validateMemberId = query('member_id')
  .exists()
  .isNumeric()
  .withMessage(MEMBER_ID_NOT_VALID)
  .custom((member_id, { req }) => {
    req.memberId = member_id;
    return Promise.resolve();
  });

export default validateMemberId;
