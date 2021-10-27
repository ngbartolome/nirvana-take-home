import Criteria from '../criteria';

import { getMinValue } from '../../utils/mathUtil';

export default class MinCriteria extends Criteria {
  calculate() {
    return getMinValue(this._data);
  }
}
