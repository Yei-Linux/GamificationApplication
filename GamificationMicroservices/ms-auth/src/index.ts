import express from "express";
import "reflect-metadata";
import { json , urlencoded} from "body-parser"
import { beans, Logger } from './core/beans';
import DEPENDENCY_TYPES from "./core/beans/ioc-types";
import { applicationSettings } from './config/application'

import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";
import './modules/User/Application/UserController';

const logger = beans.get<Logger>(DEPENDENCY_TYPES.Logger);

const app: express.Application = express();
app.use(urlencoded({extended: false}));
app.use(json());
let server =  new InversifyExpressServer(beans, null, { rootPath: "/auth" }, app);

import { runMigrations } from "./core/util/Migrations";
runMigrations();

let appConfigured = server.build();
appConfigured.listen(applicationSettings.listenPort, () => {
    logger.info('Microservice Authentication is up');
});
