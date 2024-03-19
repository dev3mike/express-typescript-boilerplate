import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import express from 'express';
import { Logger, Server } from '@configuration';
import helmet from 'helmet';
import { registerController } from 'cron-decorators';

const expressApp = express();
expressApp.use(helmet());

Logger.info("Starting server");

useExpressServer(expressApp, Server.Settings).listen(Server.Port);
registerController([__dirname + "/cronjobs/**/*.ts"]);

Logger.info(`Server started, Listening on port ${Server.Port}`);