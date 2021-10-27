import chai from 'chai';
import mocha from 'mocha';
import '../app';
import axios from 'axios';
import faker from 'faker';
import { StatusCodes } from 'http-status-codes';

import CRITERIA_TYPES from '../src/models/enums/criteriaTypes';

import endpoints from '../constants/endpoints';

import api1Mock from './mocks/api1Mock';
import api2Mock from './mocks/api2Mock';
import api3Mock from './mocks/api3Mock';
import { getMockData } from './factories/patientFactory';

import { getAverage, getMinValue, getMaxValue } from '../src/utils/mathUtil';
import { getFormattedResponse } from '../src/utils/formatUtil';

const { before, after } = mocha;
const { describe, it } = mocha;
const { assert } = chai;

const { GET_PATIENT } = endpoints;
const { BASE_URL } = process.env;
const instance = axios.create({
  baseURL: BASE_URL,
});

describe('Patient Controller', () => {
  const dataset = [getMockData({}), getMockData({}), getMockData({})];

  before(() => {
    const [api1Data, api2Data, api3Data] = dataset;

    api1Mock.getMember(api1Data);
    api2Mock.getMember(api2Data);
    api3Mock.getMember(api3Data);
  });

  it('Should return missing fields', async () => {
    try {
      await instance.get(GET_PATIENT);
    } catch (err) {
      assert.equal(err.response.status, StatusCodes.BAD_REQUEST);
    }
  });

  it('Should return missing criteria field', async () => {
    try {
      await await instance.get(GET_PATIENT, {
        params: {
          member_id: faker.datatype.number(),
        },
      });
    } catch (err) {
      assert.equal(err.response.status, StatusCodes.BAD_REQUEST);
    }
  });

  it('Should return missing member_id field', async () => {
    try {
      await await instance.get(GET_PATIENT, {
        params: {
          criteria: CRITERIA_TYPES.AVERAGE,
        },
      });
    } catch (err) {
      assert.equal(err.response.status, StatusCodes.BAD_REQUEST);
    }
  });

  it('Should return patient info according to average criteria', async () => {
    const { data } = await instance.get(GET_PATIENT, {
      params: {
        criteria: CRITERIA_TYPES.AVERAGE,
        member_id: faker.datatype.number(),
      },
    });

    const response = getFormattedResponse(dataset, getAverage);
    assert.deepEqual(data, response);
  });

  it('Should return patient info according to min criteria', async () => {
    const { data } = await instance.get(GET_PATIENT, {
      params: {
        criteria: CRITERIA_TYPES.MIN,
        member_id: faker.datatype.number(),
      },
    });

    const response = getFormattedResponse(dataset, getMinValue);
    assert.deepEqual(data, response);
  });

  it('Should return patient info according to max criteria', async () => {
    const { data } = await instance.get(GET_PATIENT, {
      params: {
        criteria: CRITERIA_TYPES.MAX,
        member_id: faker.datatype.number(),
      },
    });

    const response = getFormattedResponse(dataset, getMaxValue);
    assert.deepEqual(data, response);
  });

  after(() => {
    api1Mock.reset();
    api2Mock.reset();
    api3Mock.reset();
  });
});
