import { StatusCodes } from 'http-status-codes';

import patientService from '../../services/patientService';

const getPatient = async (req, res, next) => {
  try {
    const patient = await patientService.getCoalescedInfo(
      req.memberId,
      req.criteria,
    );

    res.status(StatusCodes.OK).send(patient);
    return next();
  } catch (err) {
    return next(err);
  }
};

export default getPatient;
