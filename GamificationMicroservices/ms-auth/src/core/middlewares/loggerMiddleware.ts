import express from "express";
import { beans, Logger } from '../beans';
import DEPENDENCY_TYPES from "../beans/dependencyTypes";

const logger = beans.get<Logger>(DEPENDENCY_TYPES.Logger);

const loggerMiddleware = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.error(err);
    next(err);
}

export default loggerMiddleware;