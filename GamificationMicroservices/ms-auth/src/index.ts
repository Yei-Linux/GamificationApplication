import express from "express";
import "reflect-metadata";
import { json , urlencoded} from "body-parser"
import { beans, Logger } from './core/beans';
import DEPENDENCY_TYPES from "./core/beans/ioc-types";
import { applicationSettings } from './config/application'
import cors from "cors";

import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";
import './endpoints/User/UserController';
import './endpoints/Specializations/SpecializationController';
import './endpoints/Courses/CoursesController';

const logger = beans.get<Logger>(DEPENDENCY_TYPES.Logger);

const app: express.Application = express();
app.use(urlencoded({extended: false}));
app.use(json());
app.use(cors());
let server =  new InversifyExpressServer(beans, null, { rootPath: "/auth" }, app);

import { runMigrations } from "./core/util/Migrations";
import { injectServices } from "./core/beans/services";
import { injectRepositories } from "./core/beans/repositories";
runMigrations();

injectServices();
injectRepositories();

let appConfigured = server.build();
let serverUp = appConfigured.listen(applicationSettings.listenPort, () => {
    logger.info('Microservice Authentication is up');
});

export { serverUp };
