import {} from 'dotenv/config';
import path from 'path';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { setEnvVariables } from './utils/envUtil';
import apiRouter from './router';
import errorHandler from './middlewares/common/errorHandler';

setEnvVariables();

const server = express();

server.use(logger('dev'));
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(errorHandler);
server.use(cookieParser());
server.use(express.static(path.join(process.cwd(), 'public')));

server.use('/api', apiRouter);

server.use(errorHandler);

module.exports = server;
