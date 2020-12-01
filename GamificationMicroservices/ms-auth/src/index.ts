import express from "express";
import "reflect-metadata";
import { json } from "body-parser"
import { beans, Logger } from './core/beans';
import DEPENDENCY_TYPES from "./core/beans/dependencyTypes";

import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";
import './modules/User/Infraestructure/UserController';

const logger = beans.get<Logger>(DEPENDENCY_TYPES.Logger);

const app: express.Application = express();
let server =  new InversifyExpressServer(beans, null, { rootPath: "/auth" }, app);

let appConfigured = server.build();
appConfigured.listen(process.env.PORT || 3000, () => {
    logger.info('Microservice Authentication is up');
});
