import MockAdapter from 'axios-mock-adapter';
import { StatusCodes } from 'http-status-codes';

import { api1Instance } from '../../src/services/thirdParty/api1Service';

const mock = new MockAdapter(api1Instance);

const getMember = (data) => mock.onGet('').reply(StatusCodes.OK, { data });

const reset = () => mock.reset();

export default {
  getMember,
  reset,
};
