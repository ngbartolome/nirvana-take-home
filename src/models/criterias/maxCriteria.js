import Criteria from '../criteria';

import { getMaxValue } from '../../utils/mathUtil';

export default class MaxCriteria extends Criteria {
  calculate() {
    return getMaxValue(this._data);
  }
}
