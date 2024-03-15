import 'reflect-metadata';
import { useExpressServer, getMetadataArgsStorage } from 'routing-controllers';
import express from 'express';
import { Logger, Server } from '@configuration';

const expressApp = express();
Logger.info("Starting server");

useExpressServer(expressApp, Server.Settings).listen(Server.Port);
Logger.info(`Server started, Listening on port ${Server.Port}`);