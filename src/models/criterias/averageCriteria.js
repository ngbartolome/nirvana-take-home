import Criteria from '../criteria';

import { getAverage } from '../../utils/mathUtil';

export default class AverageCriteria extends Criteria {
  calculate() {
    return getAverage(this._data);
  }
}
