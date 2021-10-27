import MockAdapter from 'axios-mock-adapter';
import { StatusCodes } from 'http-status-codes';

import { api2Instance } from '../../src/services/thirdParty/api2Service';

const mock = new MockAdapter(api2Instance);

const getMember = (data) => mock.onGet('').reply(StatusCodes.OK, { data });

const reset = () => mock.reset();

export default {
  getMember,
  reset,
};
