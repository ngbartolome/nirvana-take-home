import { AverageCriteria, MinCriteria, MaxCriteria } from '../models/criterias';
import CRITERIA_TYPES from '../models/enums/criteriaTypes';

import locales from '../locales/en.json';

const { CRITERIA_NOT_VALID } = locales;

const getCriteria = (criteria, values) => {
  switch (criteria) {
    case CRITERIA_TYPES.AVERAGE:
      return new AverageCriteria(values);
    case CRITERIA_TYPES.MIN:
      return new MinCriteria(values);
    case CRITERIA_TYPES.MAX:
      return new MaxCriteria(values);

    default:
      throw new Error(CRITERIA_NOT_VALID);
  }
};

export default { getCriteria };
