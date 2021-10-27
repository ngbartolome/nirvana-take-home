import PATIENT_FIELDS from '../models/enums/patientFields';

export const getFormattedResponse = (values, strategy) => {
  let response = {};
  for (const field of Object.values(PATIENT_FIELDS)) {
    let data = [];
    for (const value of values) {
      data = [...data, value[field]];
    }

    response = {
      ...response,
      [field]: strategy(data),
    };
  }
  return response;
};

export default {
  getFormattedResponse,
};
