import PATIENT_FIELDS from '../models/enums/patientFields';

import criteriaService from './criteriaService';

import api1Service from './thirdParty/api1Service';
import api2Service from './thirdParty/api2Service';
import api3Service from './thirdParty/api3Service';

const { DEDUCTIBLE, STOP_LOSS, OOP_MAX } = PATIENT_FIELDS;

const getInfoFromAPIs = async (memberId) => {
  const results = await Promise.all([
    api1Service.getPatient(memberId),
    api2Service.getPatient(memberId),
    api3Service.getPatient(memberId),
  ]);

  const values = {
    [DEDUCTIBLE]: [],
    [STOP_LOSS]: [],
    [OOP_MAX]: [],
  };

  for (const result of results) {
    const { data } = result;
    for (const field of Object.values(PATIENT_FIELDS)) {
      values[field] = [...values[field], data[field]];
    }
  }

  return values;
};

const getCoalescedInfo = async (memberId, criteriaType) => {
  try {
    const data = await getInfoFromAPIs(memberId);

    let response = {};
    for (const field of Object.values(PATIENT_FIELDS)) {
      response = {
        ...response,
        [field]: criteriaService
          .getCriteria(criteriaType, data[field])
          .calculate(),
      };
    }

    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default { getCoalescedInfo };
