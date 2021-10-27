import express from 'express';

import patientRouter from './routes/patientRouter';

import endpoints from '../constants/endpoints';

const { GET_PATIENT } = endpoints;

const router = express.Router();

router.use(GET_PATIENT, patientRouter);

export default router;
