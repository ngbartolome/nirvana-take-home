import MockAdapter from 'axios-mock-adapter';
import { StatusCodes } from 'http-status-codes';

import { api3Instance } from '../../src/services/thirdParty/api3Service';

const mock = new MockAdapter(api3Instance);

const getMember = (data) => mock.onGet('').reply(StatusCodes.OK, { data });

const reset = () => mock.reset();

export default {
  getMember,
  reset,
};
